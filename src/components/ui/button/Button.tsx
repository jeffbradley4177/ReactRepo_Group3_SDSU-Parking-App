import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'distructive';
export type ButtonSize = 'small' | 'default';
export type ButtonState = 'default' | 'pressed' | 'active';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled' | 'className'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  fullWidth?: boolean;
  isLoading?: boolean;
  leadingIcon?: React.ReactNode;
  className?: string;
}

// Class helpers

type VariantProp = 'bg' | 'text' | 'ring' | 'icon';

type VariantSpec = {
  prefix: string; // maps to --button-<prefix>-<prop>-<state>
} & Partial<Record<VariantProp, true>>;

const VARIANTS: Record<ButtonVariant, VariantSpec> = {
  primary: { prefix: 'primary', bg: true, text: true },
  secondary: { prefix: 'secondary', bg: true, text: true },
  outline: { prefix: 'outline', bg: true, text: true, ring: true },
  distructive: { prefix: 'distructive', bg: true, text: true, ring: true, icon: true },
};

const VARIANT_PROPS: VariantProp[] = ['bg', 'text', 'ring', 'icon'];

const VAR_SUFFIX: Record<VariantProp, string> = {
  bg: 'bg',
  text: 'text',
  ring: 'border',
  icon: 'icon',
};

function tokenClass(prop: VariantProp, v: VariantSpec, state: ButtonState, prefix = '') {
  const cssVar = `var(--button-${v.prefix}-${VAR_SUFFIX[prop]}-${state})`;

  if (prop === 'icon') {
    return `${prefix}[&_[data-slot=icon]]:text-[${cssVar}]`;
  }

  const utility = prop === 'bg' ? 'bg' : prop === 'text' ? 'text' : 'ring';

  return `${prefix}${utility}-[${cssVar}]`;
}

function buildByVariant(specs: Record<ButtonVariant, VariantSpec>) {
  const uiStates: Array<{ key: ButtonState; prefix: string }> = [
    { key: 'default', prefix: '' },
    { key: 'pressed', prefix: 'hover:' },
    { key: 'active', prefix: 'active:' },
  ];

  const out = {} as Record<ButtonVariant, string>;

  (Object.keys(specs) as ButtonVariant[]).forEach((name) => {
    const v = specs[name];
    const classes: string[] = [];

    VARIANT_PROPS.forEach((prop) => {
      if (!v[prop]) return;

      uiStates.forEach(({ key, prefix }) => {
        if (prop === 'ring' && key === 'default') classes.push('ring-1', 'ring-inset');
        classes.push(tokenClass(prop, v, key, prefix));
      });
    });

    out[name] = classes.join(' ');
  });

  return out;
}

function buildByVariantState(specs: Record<ButtonVariant, VariantSpec>) {
  const dataStates: Array<{ key: 'pressed' | 'active'; prefix: string }> = [
    { key: 'pressed', prefix: 'data-[state=pressed]:' },
    { key: 'active', prefix: 'data-[state=active]:' },
  ];

  const out = {} as Record<ButtonVariant, Record<ButtonState, string>>;
  (Object.keys(specs) as ButtonVariant[]).forEach((name) => {
    const v = specs[name];
    const stateMap: Record<ButtonState, string> = { default: '', pressed: '', active: '' };

    VARIANT_PROPS.forEach((prop) => {
      if (!v[prop]) return;
      dataStates.forEach(({ key, prefix }) => {
        const bits: string[] = [];
        if (prop === 'ring') bits.push(`${prefix}ring-1`, `${prefix}ring-inset`);
        const addition = [...bits, tokenClass(prop, v, key, prefix)].join(' ');
        stateMap[key] = [stateMap[key], addition].filter(Boolean).join(' ');
      });
    });

    out[name] = stateMap;
  });

  return out;
}

const byVariant = buildByVariant(VARIANTS);
const byVariantState = buildByVariantState(VARIANTS);

// Component

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      state = 'default',
      type = 'button',
      fullWidth = true,
      disabled = false,
      isLoading = false,
      children,
      leadingIcon,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const baseClass = [
      'inline-flex items-center justify-center select-none',
      'rounded-[var(--button-radius-default)]',
      'px-[var(--button-padding-inline-default)]',
      'py-[var(--button-padding-block-default)]',
      'gap-[var(--button-gap-default)]',
      'text-[length:var(--button-font-size)]',
      'font-[var(--button-font-weight)]',
      'focus:outline-none',
      'focus-visible:ring-[color:var(--border-color-focus)]',
      'focus-visible:ring-[length:var(--focus-ring-width)]',
      'focus-visible:ring-offset-[length:var(--focus-ring-offset)]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      isLoading ? 'relative' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const sizeClass: Record<ButtonSize, string> = {
      small: 'h-[var(--button-height-sm)] text-[length:var(--text-size-button)]',
      default: 'h-[var(--button-height-md)] text-[length:var(--text-size-button)]',
    }[size];

    const variantClass = byVariant[variant];
    const forcedStateClass = byVariantState[variant][state];

    // compute width using caller’s data-* or your prop
    const widthClass = (rest as Record<string, unknown>)['data-fixed-width']
      ? 'w-[274.667px]'
      : ((rest as Record<string, unknown>)['data-full-width'] ?? fullWidth)
        ? 'w-full'
        : '';

    // merge caller’s className into your classes
    const classes = [baseClass, sizeClass, variantClass, forcedStateClass, widthClass, className]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        {...rest}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        data-state={state !== 'default' ? state : undefined}
        className={classes}
      >
        {isLoading && (
          <span aria-hidden className="absolute inset-0 grid place-items-center">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </span>
        )}

        {leadingIcon && !isLoading ? (
          <span aria-hidden data-slot="icon" className="mr-2 inline-flex">
            {leadingIcon}
          </span>
        ) : null}

        <span className={isLoading ? 'opacity-0' : ''}>{children}</span>
      </button>
    );
  },
);
Button.displayName = 'Button';
