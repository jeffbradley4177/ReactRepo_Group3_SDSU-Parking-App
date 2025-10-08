import * as React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "distructive";

export type ButtonSize = "small" | "default";

export type ButtonState = "default" | "pressed" | "active";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  isLoading?: boolean;
}

function cn(...classes: Array<string | null | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const sizeClassMap: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2 text-sm",
  small: "h-9 px-3 text-xs",
};

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600",
  secondary:
    "bg-slate-200 text-slate-900 shadow-sm hover:bg-slate-300 focus-visible:outline-slate-400",
  tertiary:
    "bg-transparent text-blue-600 hover:bg-blue-50 focus-visible:outline-blue-400",
  distructive:
    "bg-rose-600 text-white shadow-sm hover:bg-rose-500 focus-visible:outline-rose-600",
};

const stateClassMap: Record<ButtonState, string> = {
  default: "",
  pressed: "translate-y-[1px] shadow-inner",
  active: "ring-2 ring-offset-2 ring-blue-500",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      state = "default",
      type = "button",
      disabled = false,
      isLoading = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const buttonClassName = cn(
      baseClass,
      sizeClassMap[size],
      variantClassMap[variant],
      stateClassMap[state],
      isDisabled && "cursor-not-allowed",
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading || undefined}
        data-variant={variant}
        data-size={size}
        data-state={state}
        className={buttonClassName}
        {...rest}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
