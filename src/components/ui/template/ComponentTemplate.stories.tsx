import type { Meta, StoryObj } from "@storybook/react";

import { ComponentTemplate } from "./ComponentTemplate";

const meta = {
  title: "UI/Component Template",
  component: ComponentTemplate,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ComponentTemplate>;

export default meta;

type Story = StoryObj<typeof ComponentTemplate>;

export const Default: Story = {
  args: {
    // Supply minimal Tailwind-based content for the template container.
    children: (
      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        <span>Status</span>
      </div>
    ),
    // Forwarded onto the underlying <section> for accessibility or interactivity.
    role: "status",
  },
};

export const WithCustomStyles: Story = {
  args: {
    className: "max-w-xs bg-slate-900 text-white",
    // Demonstrate overriding the base styles with custom utilities.
    children: (
      <button
        type="button"
        className="w-full rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
      >
        Confirm
      </button>
    ),
  },
};
