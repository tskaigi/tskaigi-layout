import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { BackGround } from "./components/BackGround";
import { TalkDescription } from "./components/TalkDescription";
import { LongTitle } from "./components/TalkDescription/index.stories";

const Example: FC = () => {
  return (
    <BackGround>
      <TalkDescription
        name={LongTitle.args?.name ?? ""}
        title={LongTitle.args?.title ?? ""}
        social={LongTitle.args?.social}
      />
    </BackGround>
  );
};

type Story = StoryObj<typeof Example>;

const meta: Meta<typeof Example> = {
  component: Example,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Basic: Story = {
  args: {},
};
