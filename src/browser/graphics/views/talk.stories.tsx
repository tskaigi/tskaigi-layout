import type { Meta, StoryObj } from "@storybook/react";
import { Presentation } from "./talk";

import gold from "../img/sponsor/gold";
import platinum from "../img/sponsor/platinum";

import { Temporal } from "temporal-polyfill";

const meta: Meta<typeof Presentation> = {
  component: Presentation,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Presentation>;

const fakeDate = Temporal.ZonedDateTime.from({
  year: 2025,
  month: 5,
  day: 23,
  timeZone: "Asia/Tokyo",
});

export const Basic: Story = {
  args: {
    now: fakeDate,
    trackName: "レバレジーズ",
    roomHashtag: "tskaigi_leverages",
    speakerName: "Speaker Name",
    talkTitle:
      "TSKaigi 2025 - TypeScript Conference in Japan / 日本の TypeScript カンファレンス - 2025 Online Edition",
    socialLinks: {
      github: "https://github.com/tskaigi",
      link: "https://2025.tskaigi.org/",
      twitter: "https://x.com/tskaigi",
    },
    goldSponsors: gold,
    platinumSponsors: platinum,
  },
};
