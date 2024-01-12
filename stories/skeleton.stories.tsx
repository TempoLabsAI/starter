// [build] library: 'shadcn'
import { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../components/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "ui/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  },
  args: {},
};
