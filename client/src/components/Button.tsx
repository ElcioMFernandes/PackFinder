import { cn } from "../utils";
import { button } from "../styles";
import { forwardRef } from "react";

import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

interface Props extends ComponentProps<"button">, VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(button({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
