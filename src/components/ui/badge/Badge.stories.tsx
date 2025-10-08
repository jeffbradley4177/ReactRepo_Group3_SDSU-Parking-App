import type { Meta, StoryObj } from "@storybook/react";

import { ComponentTemplate } from "./ComponentTemplate";

const meta = {
  title: "UI/Component Template",
  component: ComponentTemplate,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Starter card component wired with Tailwind classes. Copy and adapt this story when building new UI pieces.",
      },
    },
  },
  args: {
    title: "Dashboard Snapshot",
    description:
      "This template gives you a styled shell. Replace the content and actions with domain-specific UI.",
  },
} satisfies Meta<typeof ComponentTemplate>;

export default meta;

type Story = StoryObj<typeof ComponentTemplate>;

export const Default: Story = {};

export const WithContent: Story = {
  args: {
    actions: (
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        Refresh
      </button>
    ),
    children: (
      <ul className="space-y-2 text-left">
        <li className="flex items-center justify-between rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
          <span>Total lots monitored</span>
          <span className="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white">
            12
          </span>
        </li>
        <li className="flex items-center justify-between rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">
          <span>Open spaces</span>
          <span>126</span>
        </li>
        <li className="flex items-center justify-between rounded-md bg-rose-100 px-3 py-2 text-sm font-medium text-rose-800">
          <span>Alerts triggered</span>
          <span>3</span>
        </li>
      </ul>
    ),
    className: "max-w-lg",
  },
};
