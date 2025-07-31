import cors from "cors";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import admin from "firebase-admin";
import express, { Request, Response } from "express";
import { authenticateToken, AuthenticatedRequest } from "./middlewares/auth";

dotenv.config();

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
if (!serviceAccountPath) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT_PATH is required in .env file");
}

const serviceAccount = require(path.resolve(serviceAccountPath));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Firebase Admin initialized successfully");

interface TrackRawResponse {
  json: string;
  carrier: string;
}

interface FirebaseAuthResponse {
  kind: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.post(
  "/api/track",
  authenticateToken,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const user = req.user;
      const { code } = req.body;

      console.log(
        `New track request received with code: ${code} from user: ${
          user?.email || user?.uid
        }`
      );

      if (!code) {
        return res.status(400).json({ error: "Code is required" });
      }

      console.log(
        `Calling Wonca Labs API with API KEY: ${process.env.API_KEY?.substring(
          0,
          10
        )}...`
      );

      const response = await axios.post<TrackRawResponse>(
        "https://api-labs.wonca.com.br/wonca.labs.v1.LabsService/Track",
        { code },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.API_KEY}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        if (
          response.data &&
          response.data.json &&
          typeof response.data.json === "string"
        ) {
          try {
            const parsedData = JSON.parse(response.data.json);

            return res.status(200).json({
              carrier: response.data.carrier,
              trackingData: parsedData,
              success: true,
            });
          } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            return res
              .status(500)
              .json({ error: "Failed to parse tracking data" });
          }
        }

        return res.status(200).json(response.data);
      }

      return res.status(500).json({ error: "Failed to fetch data" });
    } catch (error) {
      console.error("API Error:", error);
      const message =
        error instanceof Error ? error.message : "An unknown error occurred";
      return res.status(500).json({ error: message });
    }
  }
);

app.post("/api/auth/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Verificar se o usuário existe
    const user = await admin.auth().getUserByEmail(email);

    // Criar custom token
    const customToken = await admin.auth().createCustomToken(user.uid);

    // Trocar custom token por ID token automaticamente
    const firebaseResponse = await axios.post<FirebaseAuthResponse>( // ← TIPAR A RESPOSTA
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_WEB_API_KEY}`,
      {
        token: customToken,
        returnSecureToken: true,
      }
    );

    res.json({
      success: true,
      idToken: firebaseResponse.data.idToken,
      refreshToken: firebaseResponse.data.refreshToken,
      expiresIn: firebaseResponse.data.expiresIn,
      uid: user.uid,
      email: user.email,
      message: "Use idToken in Authorization header: Bearer <idToken>",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({ error: "Invalid credentials or user not found" });
  }
});

app.get(
  "/api/user",
  authenticateToken,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const user = req.user;

      // Buscar dados adicionais do usuário se necessário
      const userRecord = await admin.auth().getUser(user!.uid);

      res.json({
        uid: user!.uid,
        email: user!.email,
        emailVerified: userRecord.emailVerified,
        displayName: userRecord.displayName,
        photoURL: userRecord.photoURL,
        creationTime: userRecord.metadata.creationTime,
        lastSignInTime: userRecord.metadata.lastSignInTime,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Failed to fetch user data" });
    }
  }
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
