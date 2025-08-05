import { cn } from "../utils";
import { forwardRef } from "react";
import {
  sidebar,
  sidebarItem,
  sidebarHeader,
  sidebarFooter,
  sidebarContent,
} from "../styles";

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

interface SidebarHeaderProps
  extends ComponentProps<"div">,
    VariantProps<typeof sidebarHeader> {
  asChild?: boolean;
}

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(sidebarHeader({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface SidebarContentProps
  extends ComponentProps<"div">,
    VariantProps<typeof sidebarContent> {
  asChild?: boolean;
}

export const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(sidebarContent({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface SidebarItemProps
  extends ComponentProps<"div">,
    VariantProps<typeof sidebarItem> {
  asChild?: boolean;
}

export const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(sidebarItem({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface SidebarFooterProps
  extends ComponentProps<"div">,
    VariantProps<typeof sidebarFooter> {
  asChild?: boolean;
}

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(sidebarFooter({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
