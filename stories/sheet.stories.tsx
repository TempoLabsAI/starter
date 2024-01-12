// [build] library: 'shadcn'
import { Meta, StoryObj } from "@storybook/react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

const meta: Meta<typeof Sheet> = {
  title: "ui/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: (args) => {
    return (
      <Sheet>
        <SheetTrigger>Open Right</SheetTrigger>
        <SheetContent side={args.side}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
  args: {
    side: "right",
  },
};

export const Left: Story = {
  render: (args) => {
    return (
      <Sheet>
        <SheetTrigger>Open Left</SheetTrigger>
        <SheetContent side={args.side}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
  args: {
    side: "left",
  },
};

export const Top: Story = {
  render: (args) => {
    return (
      <Sheet>
        <SheetTrigger>Open Top</SheetTrigger>
        <SheetContent side={args.side}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
  args: {
    side: "top",
  },
};

export const Bottom: Story = {
  render: (args) => {
    return (
      <Sheet>
        <SheetTrigger>Open Bottom</SheetTrigger>
        <SheetContent side={args.side}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
  args: {
    side: "bottom",
  },
};
