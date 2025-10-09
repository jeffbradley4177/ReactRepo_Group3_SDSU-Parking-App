import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge, type BadgeProps } from "./Badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Badge",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"," alert", "info", "navy", "orange", "pink", "purple", "red", "sand", "teal", "neutral", "green", "indigo", "yellow"],
    },
    leading: {
      control: false,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

const Template = (args: BadgeProps) => <Badge {...args} />;

export const Primary: Story = {
  render: Template,
};

export const Neutral: Story = {
  render: Template,
  args: {
    variant: "neutral",
  },
};

export const Success: Story = {
  render: Template,
  args: {
    variant: "success",
  },
};

export const Warning: Story = {
  render: Template,
  args: {
    variant: "warning",
  },
};

export const Error: Story = {
  render: Template,
  args: {
    variant: "error",
  },
};

export const Alert: Story = {
  render: Template,
  args: {
    variant: "alert",
  },
};

export const Info: Story = {
  render: Template,
  args: {
    variant: "info",
  },
};

export const Navy: Story = {
  render: Template,
  args: {
    variant: "navy",
  },
};

export const Orange: Story = {
  render: Template,
  args: {
    variant: "orange",
  },
};

export const Pink: Story = {
  render: Template,
  args: {
    variant: "pink",
  },
};

export const Purple: Story = {
  render: Template,
  args: {
    variant: "purple",
  },
};

export const Red: Story = {
  render: Template,
  args: {
    variant: "red",
  },
};

export const Sand: Story = {
  render: Template,
  args: {
    variant: "sand",
  },
};

export const Teal: Story = {
  render: Template,
  args: {
    variant: "teal",
  },
};

export const Green: Story = {
  render: Template,
  args: {
    variant: "green",
  },
};

export const Indigo
: Story = {
  render: Template,
  args: {
    variant: "indigo",
  },
};

export const Yellow: Story = {
  render: Template,
  args: {
    variant: "yellow",
  },
};

export const WithLeadingIcon: Story = {
  render: Template,
  args: {
    leading: (
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
    ),
    children: "Status",
  },
  parameters: {
    controls: {
      exclude: ["leading"],
    },
  },
};
