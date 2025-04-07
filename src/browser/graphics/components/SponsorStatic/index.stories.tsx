import { Meta, StoryObj } from "@storybook/react";
import { SponsorStatic } from "./index";

import logo from "../../img/sponsor/platinum";

type Story = StoryObj<typeof SponsorStatic>;
const meta: Meta<typeof SponsorStatic> = {
  component: SponsorStatic,
};
export default meta;
export const Basic: Story = {
  args: { title: "Platinum Sponsor", images: logo },
};
