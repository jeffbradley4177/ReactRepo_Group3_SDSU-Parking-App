import type { ReactNode } from "react";

export interface ComponentTemplateProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
  /**
   * Optional className lets callers extend styling while keeping Tailwind tree-shaking happy.
   */
  className?: string;
}

/**
 * ComponentTemplate provides a Tailwind-ready starting point for new UI components.
 * Copy, rename, and expand it to match your use case.
 */
export function ComponentTemplate({
  title = "Component title",
  description = "Use this template as a baseline and replace the content.",
  actions,
  children,
  className = "",
}: ComponentTemplateProps) {
  const baseClass =
    "rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900";
  // Merge default Tailwind surface styling with any caller overrides.
  const containerClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <section className={containerClass}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>
        {actions ?? (
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Action
          </button>
        )}
      </header>

      {children ? (
        <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
          {children}
        </div>
      ) : (
        // Provide a friendly reminder until real content is supplied.
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Replace this placeholder with your component implementation or pass{" "}
          <code className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-slate-100">
            children
          </code>{" "}
          to render custom content here.
        </p>
      )}
    </section>
  );
}

export default ComponentTemplate;
