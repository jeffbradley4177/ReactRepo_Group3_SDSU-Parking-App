import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click me",
    variant: "primary",
    size: "default",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "distructive",
    children: "Delete",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading state",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
    </div>
  ),
  args: {
    children: "Button",
  },
  parameters: {
    controls: {
      exclude: ["children"],
    },
  },
};
