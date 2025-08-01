import { cn } from "../utils";
import { forwardRef } from "react";
import { header, headerTitle, headerContent, headerFooter } from "../styles";

import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

interface HeaderProps
  extends ComponentProps<"header">,
    VariantProps<typeof header> {
  asChild?: boolean;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <nav
        className={cn(header({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </nav>
    );
  }
);

Header.displayName = "Header";

interface HeaderTitleProps
  extends ComponentProps<"h1">,
    VariantProps<typeof headerTitle> {
  asChild?: boolean;
}

export const HeaderTitle = forwardRef<HTMLHeadingElement, HeaderTitleProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <h1
        className={cn(headerTitle({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

HeaderTitle.displayName = "HeaderTitle";

interface HeaderContentProps
  extends ComponentProps<"div">,
    VariantProps<typeof headerContent> {
  asChild?: boolean;
}

export const HeaderContent = forwardRef<HTMLDivElement, HeaderContentProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(headerContent({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HeaderContent.displayName = "HeaderContent";

interface HeaderFooterProps
  extends ComponentProps<"div">,
    VariantProps<typeof headerFooter> {
  asChild?: boolean;
}

export const HeaderFooter = forwardRef<HTMLDivElement, HeaderFooterProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(headerFooter({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HeaderFooter.displayName = "HeaderFooter";
