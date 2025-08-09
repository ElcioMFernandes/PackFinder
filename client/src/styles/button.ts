import { cva } from "class-variance-authority";

export const button = cva(
  // Classes base - estilo neo-brutalista comum a todos os botões
  "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-150 ease-out border-4 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(23,23,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(23,23,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_rgba(23,23,23,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0",
  {
    variants: {
      variant: {
        pri: "bg-teal-400 text-neutral-900 hover:bg-teal-300 active:bg-teal-500",
        sec: "bg-rose-400 text-neutral-900 hover:bg-rose-300 active:bg-rose-500",
      },
      size: {
        sm: "px-4 py-2 text-sm min-h-[40px]",
        md: "px-6 py-3 text-md min-h-[48px]",
        lg: "px-8 py-4 text-lg min-h-[56px]",
      },
    },
    defaultVariants: {
      variant: "pri",
      size: "md",
    },
  }
);
