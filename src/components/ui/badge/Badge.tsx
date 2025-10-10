import * as React from 'react';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'alert'
  | 'info'
  | 'navy'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'sand'
  | 'teal'
  | 'neutral'
  | 'green'
  | 'indigo'
  | 'yellow';

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: BadgeVariant;
  leading?: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-[var(--badge-primary-bg)] text-[var(--badge-primary-text)]',
  secondary: 'bg-[var(--badge-secondary-bg)] text-[var(--badge-secondary-text)]',
  success: 'bg-[var(--badge-success-bg-default)] text-[var(--badge-success-text-default)]',
  warning: 'bg-[var(--badge-warning-bg-default)] text-[var(--badge-warning-text-default)]',
  error: 'bg-[var(--badge-error-bg-default)] text-[var(--badge-error-text-default)]',
  alert: 'bg-[var(--badge-alert-bg-default)] text-[var(--badge-alert-text-default)]',
  info: 'bg-[var(--badge-info-bg-default)] text-[var(--badge-info-text-default)]',
  navy: 'bg-[var(--badge-navy-bg-default)] text-[var(--badge-navy-text-default)]',
  orange: 'bg-[var(--badge-orange-bg-default)] text-[var(--badge-orange-text-default)]',
  pink: 'bg-[var(--badge-pink-bg-default)] text-[var(--badge-pink-text-default)]',
  purple: 'bg-[var(--badge-purple-bg-default)] text-[var(--badge-purple-text-default)]',
  red: 'bg-[var(--badge-red-bg-default)] text-[var(--badge-red-text-default)]',
  sand: 'bg-[var(--badge-sand-bg-default)] text-[var(--badge-sand-text-default)]',
  teal: 'bg-[var(--badge-teal-bg-default)] text-[var(--badge-teal-text-default)]',
  neutral: 'bg-[var(--badge-neutral-bg-default)] text-[var(--badge-neutral-text-default)]',
  green: 'bg-[var(--badge-green-bg-default)] text-[var(--badge-green-text-default)]',
  indigo: 'bg-[var(--badge-indigo-bg-default)] text-[var(--badge-indigo-text-default)]',
  yellow: 'bg-[var(--badge-yellow-bg-default)] text-[var(--badge-yellow-text-default)]',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', leading, children, className = '', ...props }, ref) => {
    const baseClass = [
      'inline-flex min-h-[var(--badge-height-default)] items-center justify-center',
      'rounded-[var(--badge-radius-default)] px-[var(--badge-padding-inline-default)]',
      'py-[var(--badge-padding-block-default)] gap-[var(--badge-gap-default)]',
      'text-[length:var(--badge-font-size)] font-[var(--badge-font-weight)]',
      'tracking-wide leading-none w-max',
    ]
      .filter(Boolean)
      .join(' ');

    const variantClass = variantClasses[variant] ?? variantClasses.primary;

    const classes = [baseClass, variantClass, className].filter(Boolean).join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {leading ? (
          <span
            aria-hidden
            className="inline-flex h-[var(--badge-icon-default)] w-[var(--badge-icon-default)] items-center justify-center"
          >
            {leading}
          </span>
        ) : null}
        <span>{children}</span>
      </span>
    );
  },
);

Badge.displayName = 'Badge';
