import { cva } from "class-variance-authority";

export const header = cva(
  "bg-white border-b border-gray-200 px-6 py-4 shadow-sm",
  {
    variants: {
      variant: {
        primary: "bg-white border-gray-200",
        secondary: "bg-gray-50 border-gray-300",
      },
      size: {
        sm: "px-4 py-2",
        md: "px-6 py-4",
        lg: "px-8 py-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const headerTitle = cva("text-xl font-bold text-gray-900", {
  variants: {
    variant: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
    },
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const headerContent = cva("flex items-center gap-6", {
  variants: {
    variant: {
      primary: "",
      secondary: "opacity-80",
    },
    size: {
      sm: "gap-3",
      md: "gap-6",
      lg: "gap-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const headerFooter = cva("flex items-center", {
  variants: {
    variant: {
      primary: "",
      secondary: "opacity-80",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
