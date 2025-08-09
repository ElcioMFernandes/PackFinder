import { cn } from "../utils";
import { forwardRef } from "react";
import { sidebar } from "../styles";

import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

interface Props extends ComponentProps<"nav">, VariantProps<typeof sidebar> {
  asChild?: boolean;
}

export const Sidebar = forwardRef<HTMLElement, Props>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <nav
        className={cn(sidebar({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </nav>
    );
  }
);
