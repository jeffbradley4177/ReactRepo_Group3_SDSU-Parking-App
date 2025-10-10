import * as React from 'react';

type AppLayoutProps = {
  title?: string;
  description?: string;
  leadingVisual?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  align?: 'center' | 'start';
  constrain?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
};

const CONTAINER_WIDTH: Record<NonNullable<AppLayoutProps['constrain']>, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
};

export function AppLayout({
  title,
  description,
  leadingVisual,
  actions,
  footer,
  align = 'center',
  constrain = 'sm',
  children,
}: AppLayoutProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const widthConstraint = CONTAINER_WIDTH[constrain];

  return (
    <div className="flex min-h-screen flex-col bg-[var(--surface-default,#0f172a)] text-[var(--text-color-default,#f8fafc)]">
      <main className="flex flex-1 flex-col items-center px-6 pb-16 pt-24 sm:px-10">
        <div className={`flex w-full flex-col ${alignment} gap-6 ${widthConstraint}`}>
          {leadingVisual ? (
            <div className="flex w-full justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[color:var(--border-color-muted,#334155)] bg-[color:var(--surface-subtle,#1e293b)] text-4xl shadow-sm">
                {leadingVisual}
              </div>
            </div>
          ) : null}

          {(title || description) && (
            <header className="flex flex-col gap-3">
              {title ? <h1 className="text-lg font-semibold sm:text-xl">{title}</h1> : null}
              {description ? (
                <p className="text-sm text-[color:var(--text-color-muted,#cbd5f5)] sm:text-base">
                  {description}
                </p>
              ) : null}
            </header>
          )}

          {children ? <section className="w-full text-sm sm:text-base">{children}</section> : null}

          {actions ? (
            <div className="flex w-full flex-col gap-3 text-sm font-medium">{actions}</div>
          ) : null}
        </div>
      </main>

      {footer ? (
        <footer className="flex items-center justify-center pb-8 text-xs text-[color:var(--text-color-muted,#94a3b8)]">
          {footer}
        </footer>
      ) : null}
    </div>
  );
}
