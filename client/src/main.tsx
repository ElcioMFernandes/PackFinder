import "./index.css";
import { Loader } from "./components";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

const App = lazy(() =>
  import("./App.tsx").then((module) => ({ default: module.App }))
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
