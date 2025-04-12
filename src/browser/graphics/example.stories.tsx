import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { BackGround, gridAreaName } from "./components/BackGround";
import { TalkDescription } from "./components/TalkDescription";
import { LongTitle } from "./components/TalkDescription/index.stories";

import { SponsorArea } from "./components/SponsorArea";
import platinum from "./img/sponsor/platinum";
import gold from "./img/sponsor/gold";

const Example: FC = () => {
  return (
    <BackGround>
      <SponsorArea
        gold={gold}
        platinum={platinum}
        areaName={gridAreaName.sponsor}
      />
      <TalkDescription
        name={LongTitle.args?.name ?? ""}
        title={LongTitle.args?.title ?? ""}
        social={LongTitle.args?.social}
        areaName={gridAreaName.description}
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
