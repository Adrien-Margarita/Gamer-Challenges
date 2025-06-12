// src/components/ui/button.tsx

import { cn } from "@/utils/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const baseStyles = "btn";

    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      default: "btn-primary",
      ghost: "btn-ghost",
      outline: "btn-outline",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
