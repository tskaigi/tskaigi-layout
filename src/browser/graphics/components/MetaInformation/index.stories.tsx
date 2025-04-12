import type { Meta, StoryObj } from "@storybook/react";

import { MetaInformation } from "./index";

const meta: Meta<typeof MetaInformation> = {
  component: MetaInformation,
  args: {},
};

export default meta;

export const Basic: StoryObj<typeof MetaInformation> = {
  args: {},
};
