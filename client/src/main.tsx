import "./index.css";
import { Provider } from "jotai";
import { Loader } from "./components";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense, lazy } from "react";

const App = lazy(() =>
  import("./App.tsx").then((module) => ({ default: module.App }))
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode>
);
