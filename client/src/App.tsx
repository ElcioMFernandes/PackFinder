import { Protected } from "./security";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Access,
  Contact,
  History,
  Features,
  Monition,
  Tracking,
} from "./pages";

export const App = () => {
  return (
    <div className="w-screen h-screen flex flex-row overflow-hidden bg-neutral-100 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Access />} />
          <Route
            path="/about"
            element={
              <Protected>
                <About />
              </Protected>
            }
          />
          <Route
            path="/contact"
            element={
              <Protected>
                <Contact />
              </Protected>
            }
          />
          <Route
            path="/history"
            element={
              <Protected>
                <History />
              </Protected>
            }
          />
          <Route
            path="/tracking"
            element={
              <Protected>
                <Tracking />
              </Protected>
            }
          />
          <Route
            path="/monition"
            element={
              <Protected>
                <Monition />
              </Protected>
            }
          />
          <Route
            path="/features"
            element={
              <Protected>
                <Features />
              </Protected>
            }
          />
        </Routes>
      </main>
    </div>
  );
};
