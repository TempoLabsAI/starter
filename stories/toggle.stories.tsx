// [build] library: 'shadcn'
import { Meta, StoryObj } from "@storybook/react";
import { FontItalicIcon, FontBoldIcon } from "@radix-ui/react-icons";
import { Toggle } from "../components/ui/toggle";

const meta: Meta<typeof Toggle> = {
  title: "ui/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  ),
  args: {},
};

export const Outline: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle italic" variant="outline">
      <FontItalicIcon className="h-4 w-4" />
    </Toggle>
  ),
  args: {},
};

export const WithText: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle italic">
      <FontItalicIcon className="h-4 w-4" />
      Italic
    </Toggle>
  ),
  args: {},
};

export const Small: Story = {
  render: (args) => (
    <Toggle size="sm" aria-label="Toggle bold">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  ),
  args: {},
};

export const Large: Story = {
  render: (args) => (
    <Toggle size="lg" aria-label="Toggle bold">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  ),
  args: {},
};

export const Destructive: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold" disabled>
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  ),
  args: {
    variant: "destructive",
  },
};
