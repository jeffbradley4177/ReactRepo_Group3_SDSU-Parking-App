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
    state: "default",
    fullWidth: true,
    isLoading: false,
  },
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "distructive"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "small"],
    },
    state: {
      control: "inline-radio",
      options: ["default", "pressed", "active"],
    },
    fullWidth: {
      control: "boolean",
    },
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

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Distructive: Story = {
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

export const Pressed: Story = {
  args: {
    state: "pressed",
  },
};

export const Active: Story = {
  args: {
    state: "active",
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
      exclude: ["children", "state"],
    },
  },
};

export const InlineWidth: Story = {
  name: "Inline Width",
  args: {
    fullWidth: false,
    children: "Inline button",
  },
  parameters: {
    controls: {
      exclude: ["state"],
    },
  },
};
