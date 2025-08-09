import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["pri", "sec"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    asChild: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story padrão
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Variantes pri
export const pri: Story = {
  args: {
    variant: "pri",
    children: "Primary Button",
  },
};

export const sec: Story = {
  args: {
    variant: "sec",
    children: "Secondary Button",
  },
};

// Tamanhos
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// Estados
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// Combinações
export const priSmall: Story = {
  args: {
    variant: "pri",
    size: "sm",
    children: "Primary Small",
  },
};

export const secLarge: Story = {
  args: {
    variant: "sec",
    size: "lg",
    children: "Secondary Large",
  },
};

// Showcase de todas as variantes
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="pri" size="sm">
          Primary SM
        </Button>
        <Button variant="pri" size="md">
          Primary MD
        </Button>
        <Button variant="pri" size="lg">
          Primary LG
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="sec" size="sm">
          Secondary SM
        </Button>
        <Button variant="sec" size="md">
          Secondary MD
        </Button>
        <Button variant="sec" size="lg">
          Secondary LG
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button disabled size="sm">
          Disabled SM
        </Button>
        <Button disabled size="md">
          Disabled MD
        </Button>
        <Button disabled size="lg">
          Disabled LG
        </Button>
      </div>
    </div>
  ),
};
