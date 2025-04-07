import { Meta, StoryObj } from "@storybook/react";
import { SponsorRoll } from "./index";

import logo from "../../img/sponsor/gold";

type Story = StoryObj<typeof SponsorRoll>;
const meta: Meta<typeof SponsorRoll> = {
  component: SponsorRoll,
};

export default meta;
export const Basic: Story = {
  args: {
    title: "Gold Sponsors",
    images: logo,
  },
};
