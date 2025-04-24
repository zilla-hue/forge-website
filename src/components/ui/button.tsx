import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors relative overflow-hidden hover:scale-105 transition-transform duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus-visible:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 focus-visible:bg-secondary/70",
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
      isLoading: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        variant: ["default", "destructive", "outline", "secondary", "ghost"],
        className: "opacity-70",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      isLoading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      loadingText,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || isLoading;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, isLoading, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        data-state={isLoading ? "loading" : undefined}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {isLoading && loadingText ? loadingText : children}

        {/* Focus ring - visible only on keyboard focus */}
        <span className="absolute inset-0 rounded-lg outline-offset-2 outline-2 outline-ring/70 opacity-0 focus-visible:opacity-100" />
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// Example usage
function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button>Default Button</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="flex gap-2">
        <Button isLoading>Loading</Button>
        <Button isLoading loadingText="Processing...">
          Submit
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}

export default ButtonDemo;
