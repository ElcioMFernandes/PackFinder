import { useState, useEffect } from "react";

type Breakpoint = "sm" | "md" | "lg";

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm");

  function handleResize() {
    const width = window.innerWidth;

    switch (true) {
      case width >= 1024:
        setBreakpoint("lg");
        break;
      case width >= 768:
        setBreakpoint("md");
        break;
      default:
        setBreakpoint("sm");
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
