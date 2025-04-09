import { Meta, StoryObj } from "@storybook/react";

import { BackGround } from "./index";

type Story = StoryObj<typeof BackGround>;
const meta: Meta<typeof BackGround> = {
  component: BackGround,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Basic: Story = {
  args: {
    children: "Hello World",
  },
};
