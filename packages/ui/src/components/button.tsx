import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../cn";

/**
 * Styles for the button component
 * 
 * TODO: add more variants:
 * - secondary
 * - danger
 * - success
 */
export const ButtonStyles = cva("button", {
    variants: {
        variant: {
            primary: [
                "bg-stone-900",
                "text-white",
                "text-sm",
                "rounded-full",
                "hover:bg-stone-800",
                "transition",
                "disabled:bg-stone-600",
            ]
        },
        size: {
            md: "px-3 py-1"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});


export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonStyles>> = (
    ({ variant, children, size, ...props }) => {
        return (
            <button
                {...props}
                className={cn(ButtonStyles({ variant, size }), props.className)}
            >
                {children}
            </button>
        );
    }
);
