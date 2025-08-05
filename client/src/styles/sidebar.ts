import { cva } from "class-variance-authority";

export const sidebar = cva("flex flex-col p-2 bg-neutral-900", {
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

export const sidebarHeader = cva("flex items-center gap-3", {
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

export const sidebarContent = cva("flex-1 overflow-y-auto", {
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

export const sidebarItem = cva("flex items-center gap-2 hover:bg-neutral-600", {
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

export const sidebarFooter = cva("flex items-center gap-3", {
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
