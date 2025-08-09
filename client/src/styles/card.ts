import { cva } from "class-variance-authority";

export const card = cva(
  "flex flex-col gap-2 p-4 rounded-lg text-neutral-800 dark:text-neutral-200 select-none cursor-default shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 border border-neutral-200/20 dark:border-neutral-700/20",
  {
    variants: {
      variant: {
        pri: "bg-gradient-to-t from-neutral-300 dark:from-neutral-900 to-neutral-200 dark:to-neutral-800",
        sec: "bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600",
      },
      size: {
        sm: "p-2 gap-1 text-sm",
        md: "p-4 gap-2",
        lg: "p-6 gap-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "pri",
      size: "md",
    },
  }
);
