import { Meta, StoryObj } from "@storybook/react";
import { SlideArea } from "./index";

type Story = StoryObj<typeof SlideArea>;
const meta: Meta<typeof SlideArea> = {
  component: SlideArea,
};

export default meta;

export const Basic: Story = {
  args: {
    frameURL: undefined,
    subtitling: false,
  },
};
