import admin from "firebase-admin";
import { Request, Response, NextFunction } from "express";

export interface AuthenticatedRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (process.env.ENVIRONMENT === "dev") {
    console.log("Skipping authentication in dev environment");
    req.user = {
      uid: "dev-user-123",
      email: "dev@example.com",
      iss: "dev",
      aud: "dev",
      auth_time: Date.now() / 1000,
      exp: Date.now() / 1000 + 3600,
      iat: Date.now() / 1000,
      sub: "dev-user-123",
    } as admin.auth.DecodedIdToken;
    return next();
  }

  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Access token required" });
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;

    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};
