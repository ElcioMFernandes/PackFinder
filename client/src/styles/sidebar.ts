import { cva } from "class-variance-authority";

export const sidebar = cva("flex flex-col p-4 gap-2 bg-neutral-900", {
  variants: {
    variant: {
      pri: "",
      sec: "",
    },
    size: {
      sm: "min-w-30",
      md: "min-w-64",
      lg: "min-w-96",
    },
  },
  defaultVariants: {
    variant: "pri",
    size: "md",
  },
});
