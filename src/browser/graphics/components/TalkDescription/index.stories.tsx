import { Meta, StoryObj } from "@storybook/react";
import { TalkDescription } from "./index";

type Story = StoryObj<typeof TalkDescription>;

const meta: Meta<typeof TalkDescription> = {
  component: TalkDescription,
};

export default meta;

export const Basic: Story = {
  args: {
    name: "TSKaigi",
    social: undefined,
    title: "TSKaigi 2025",
  },
};

export const AllSocialLink: Story = {
  args: {
    ...Basic.args,
    social: {
      github: "https://github.com/tskaigi",
      link: "https://2025.tskaigi.org/",
      twitter: "https://x.com/tskaigi",
    },
  },
};

export const LongTitle: Story = {
  args: {
    ...AllSocialLink.args,
    title:
      "TSKaigi 2025 - TypeScript Conference in Japan / 日本の TypeScript カンファレンス - 2025 Online Edition",
  },
};
