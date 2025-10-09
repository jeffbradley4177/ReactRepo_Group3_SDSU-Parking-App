import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ComponentTemplate } from "./ComponentTemplate";

const meta = {
  title: "UI/Component Template",
  component: ComponentTemplate,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "surface",
    padding: "md",
    radius: "md",
    shadow: "sm",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["surface", "muted", "outline", "ghost"],
    },
    padding: {
      control: "inline-radio",
      options: ["none", "xs", "sm", "md", "lg"],
    },
    radius: {
      control: "inline-radio",
      options: ["none", "sm", "md", "lg", "full"],
    },
    shadow: {
      control: "inline-radio",
      options: ["none", "sm", "md"],
    },
    as: {
      control: false,
    },
  },
} satisfies Meta<typeof ComponentTemplate>;

export default meta;

type Story = StoryObj<typeof ComponentTemplate>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        <span>Status</span>
      </div>
    ),
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

export const VariantsShowcase: Story = {
  name: "Variant Gallery",
  render: (args) => (
    <div className="grid gap-4">
      {(["surface", "muted", "outline", "ghost"] as const).map((variant) => (
        <ComponentTemplate
          key={variant}
          {...args}
          variant={variant}
          className="max-w-sm"
        >
          <div className="flex items-center justify-between text-sm font-medium capitalize">
            <span>{variant}</span>
            <span className="text-xs font-normal text-slate-500">
              padding {args.padding}, radius {args.radius}
            </span>
          </div>
        </ComponentTemplate>
      ))}
    </div>
  ),
  parameters: {
    controls: {
      exclude: ["variant", "children"],
    },
  },
  args: {
    children: (
      <p className="text-sm text-slate-600">
        Polymorphic surface wrapper for quick layouts.
      </p>
    ),
  },
};

export const PolymorphicArticle: Story = {
  name: "Polymorphic Example",
  args: {
    as: "article",
    id: "component-template-article",
    children: (
      <div className="space-y-2 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Custom Element Rendering
        </h2>
        <p>
          The component forwards refs and props to whichever semantic element
          you choose via the `as` prop.
        </p>
      </div>
    ),
    shadow: "md",
  },
  parameters: {
    controls: {
      exclude: ["children"],
    },
  },
};
