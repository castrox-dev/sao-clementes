"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:pointer-events-none disabled:opacity-50 gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-dark hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-dark transition-all duration-300",
        secondary:
          "bg-dark-300 text-white hover:bg-dark-400 border border-dark-500",
        ghost:
          "text-gray-300 hover:text-white hover:bg-dark-300",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-[#FFD400] to-[#FFAA00] text-dark font-bold hover:from-[#FFAA00] hover:to-[#FFD400] shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 active:scale-[0.98]",
        "outline-white":
          "border-2 border-white/30 text-white hover:bg-white hover:text-dark backdrop-blur-sm",
        cta: "bg-primary text-dark font-bold px-8 py-3 rounded-full hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
