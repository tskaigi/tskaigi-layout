import { Meta, StoryObj } from "@storybook/react";
import { SponsorArea } from "./index";

import platinum from "../../img/sponsor/platinum";
import gold from "../../img/sponsor/gold";

type Story = StoryObj<typeof SponsorArea>;
const meta: Meta<typeof SponsorArea> = {
  component: SponsorArea,
  args: {
    gold,
    platinum,
    intervalTime: 10_000,
  },
  argTypes: {
    gold: {
      control: {
        disable: true,
      },
    },
    platinum: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Basic: Story = {
  args: {},
};
