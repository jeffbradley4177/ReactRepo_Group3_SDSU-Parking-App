import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button, type ButtonSize, type ButtonState, type ButtonVariant } from './Button';

const VARIANT_OPTIONS: ButtonVariant[] = ['primary', 'secondary', 'outline', 'distructive'];
const STATE_OPTIONS: ButtonState[] = ['default', 'pressed', 'active'];
const SIZE_OPTIONS: ButtonSize[] = ['small', 'default'];

const ArrowRightIcon = () => (
  <svg
    aria-hidden
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 17v-4m0-4h.01M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
    state: 'default',
    fullWidth: true,
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select' },
      options: VARIANT_OPTIONS,
    },
    size: {
      control: { type: 'inline-radio' },
      options: SIZE_OPTIONS,
    },
    state: {
      control: { type: 'inline-radio' },
      options: STATE_OPTIONS,
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    leadingIcon: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <ArrowRightIcon />,
    children: 'Continue',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading state',
  },
  parameters: {
    controls: { exclude: ['leadingIcon'] },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Informational: Story = {
  args: {
    variant: 'outline',
    leadingIcon: <InfoIcon />,
    children: 'More details',
  },
};

export const Variants: Story = {
  args: {
    fullWidth: false,
  },
  render: (args) => (
    <div className="flex flex-col gap-3">
      {VARIANT_OPTIONS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ['variant', 'leadingIcon', 'children'] },
  },
};

export const States: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false,
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      {STATE_OPTIONS.map((state) => (
        <Button key={state} {...args} state={state}>
          {state}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ['state', 'leadingIcon', 'children'] },
  },
};

export const Sizes: Story = {
  args: {
    fullWidth: false,
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      {SIZE_OPTIONS.map((size) => (
        <Button key={size} {...args} size={size}>
          {size === 'default' ? 'Default size' : 'Small size'}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ['size', 'leadingIcon', 'children'] },
  },
};

export const WidthModes: Story = {
  args: {
    children: 'Inline width',
    fullWidth: false,
  },
  render: (args) => (
    <div className="flex flex-col gap-3">
      <Button {...args} data-full-width>
        Full width via data attribute
      </Button>
      <Button {...args}>Inline width</Button>
      <Button {...args} data-fixed-width>
        Fixed width token
      </Button>
    </div>
  ),
  parameters: {
    controls: { exclude: ['leadingIcon', 'children'] },
  },
};
