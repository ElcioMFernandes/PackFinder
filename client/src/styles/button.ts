import { cva } from "class-variance-authority";

export const button = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
