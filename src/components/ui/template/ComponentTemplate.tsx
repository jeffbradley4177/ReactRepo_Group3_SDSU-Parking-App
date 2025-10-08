import { forwardRef } from "react";
import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

type Variant = "surface" | "muted" | "outline" | "ghost";
type Padding = "none" | "xs" | "sm" | "md" | "lg";
type Radius = "none" | "sm" | "md" | "lg" | "full";
type Shadow = "none" | "sm" | "md";

interface StyleSlots {
  variant?: Variant;
  padding?: Padding;
  radius?: Radius;
  shadow?: Shadow;
  className?: string;
  children?: ReactNode;
}

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];

export type ComponentTemplateProps<T extends ElementType = "section"> = {
  /**
   * Render as any semantic element or custom component.
   * Defaults to a section for grouped content.
   */
  as?: T;
} & StyleSlots &
  Omit<ComponentPropsWithoutRef<T>, keyof StyleSlots | "as">;

const variantStyles: Record<Variant, string> = {
  surface:
    "border border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100",
  muted:
    "border border-transparent bg-slate-50 text-slate-900 dark:bg-slate-900/60 dark:text-slate-100",
  outline:
    "border border-slate-200 bg-transparent text-slate-900 dark:border-slate-800 dark:text-slate-100",
  ghost:
    "border border-transparent bg-transparent text-slate-900 dark:text-slate-100",
};

const paddingStyles: Record<Padding, string> = {
  none: "p-0",
  xs: "p-2",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

const radiusStyles: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const shadowStyles: Record<Shadow, string> = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ComponentTemplateComponent = <T extends ElementType = "section">(
  props: ComponentTemplateProps<T> & { ref?: PolymorphicRef<T> }
) => ReactElement | null;

/**
 * Tailwind-ready polymorphic surface wrapper that provides consistent spacing,
 * rounded corners, and a few opinionated variants for rapid prototyping.
 */
export const ComponentTemplate = forwardRef(
  <T extends ElementType = "section">(
    {
      as,
      children = null,
      className,
      variant = "surface",
      padding = "md",
      radius = "md",
      shadow = "sm",
      ...rest
    }: ComponentTemplateProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const Component = as ?? "section";

    return (
      <Component
        ref={ref}
        {...rest}
        className={cn(
          "relative flex flex-col gap-3 transition-colors transition-shadow duration-200",
          variantStyles[variant],
          paddingStyles[padding],
          radiusStyles[radius],
          shadowStyles[shadow],
          className
        )}
      >
        {children}
      </Component>
    );
  }
) as ComponentTemplateComponent;

ComponentTemplate.displayName = "ComponentTemplate";

export default ComponentTemplate;
