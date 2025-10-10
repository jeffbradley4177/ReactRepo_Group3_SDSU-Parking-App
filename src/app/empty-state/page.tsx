import type { Metadata } from 'next';
import Link from 'next/link';
import { AppLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Nothing Here Yet',
  description: 'Empty state placeholder tailored for a mobile experience.',
};

export default function EmptyStatePage() {
  const actions = (
    <>
      <span
        aria-disabled="true"
        className="inline-flex w-full items-center justify-center rounded-[var(--button-radius-default)] bg-[color:var(--button-secondary-bg-default,#1e293b)] px-[var(--button-padding-inline-default)] py-[var(--button-padding-block-default)] text-[color:var(--button-secondary-text-default,#94a3b8)] opacity-60"
      >
        Home
      </span>

      <Link
        href="/"
        className="inline-flex w-full items-center justify-center rounded-[var(--button-radius-default)] bg-[var(--button-primary-bg-default,#3b82f6)] px-[var(--button-padding-inline-default)] py-[var(--button-padding-block-default)] text-[var(--button-primary-text-default,#0f172a)] transition-colors hover:bg-[var(--button-primary-bg-pressed,#2563eb)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus,#38bdf8)] focus-visible:ring-offset-2"
      >
        Go to Dashboard
      </Link>

      <Link
        href="/search"
        className="inline-flex w-full items-center justify-center rounded-[var(--button-radius-default)] border border-[color:var(--button-outline-border-default,#334155)] px-[var(--button-padding-inline-default)] py-[var(--button-padding-block-default)] text-[color:var(--button-outline-text-default,#cbd5f5)] transition-colors hover:border-[var(--button-outline-border-pressed,#475569)] hover:bg-[var(--button-outline-bg-pressed,#1e293b)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus,#38bdf8)] focus-visible:ring-offset-2"
      >
        Explore Parking Lots
      </Link>
    </>
  );

  return (
    <AppLayout
      leadingVisual={<span role="img" aria-label="Map pin">📍</span>}
      title="No Parking Activity Yet"
      description="We'll show your recent parking lots here once data starts rolling in. Check back soon or browse available lots now."
      actions={actions}
      footer={<span>Updated a moment ago</span>}
    >
      <p className="text-[color:var(--text-color-subtle,#e2e8f0)]">
        Tip: enable push alerts to get notified as soon as your favorite lots start filling up.
      </p>
    </AppLayout>
  );
}
