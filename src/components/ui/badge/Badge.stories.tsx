import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge, type BadgeVariant } from './Badge';

const VARIANT_OPTIONS: BadgeVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'alert',
  'info',
  'navy',
  'orange',
  'pink',
  'purple',
  'red',
  'sand',
  'teal',
  'neutral',
  'green',
  'indigo',
  'yellow',
];

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Badge',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: VARIANT_OPTIONS,
    },
    leading: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeadingIcon: Story = {
  args: {
    leading: <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />,
    children: 'Status',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {VARIANT_OPTIONS.map((variant) => (
        <Badge key={variant} {...args} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
  parameters: {
    controls: {
      exclude: ['variant', 'leading', 'children'],
    },
  },
};
