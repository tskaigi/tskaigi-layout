import { Meta, StoryObj } from "@storybook/react";
import { Camera } from "./index";

type Story = StoryObj<typeof Camera>;
const meta: Meta<typeof Camera> = {
  component: Camera,
};

export default meta;

export const Basic: Story = {
  args: {
    room: "trackOne",
  },
};
