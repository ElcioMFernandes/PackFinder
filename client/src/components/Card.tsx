import { cn } from "../utils";
import { card } from "../styles";
import { forwardRef } from "react";
import { motion } from "framer-motion";

import type { VariantProps } from "class-variance-authority";
import type { HTMLMotionProps } from "framer-motion";

interface Props
  extends Omit<HTMLMotionProps<"div">, "ref">,
    VariantProps<typeof card> {
  asChild?: boolean;
}

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        className={cn(card({ variant, size, className }))}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
