import type { ComponentProps, FC } from "react";
import { Temporal } from "temporal-polyfill";

import { BackGround, gridAreaName } from "../components/BackGround";
import { TalkDescription } from "../components/TalkDescription";
import { SlideArea } from "../components/SlideArea";
import { Camera } from "../components/Camera";
import { MetaInformation } from "../components/MetaInformation";
import { SponsorArea } from "../components/SponsorArea";

type PresentationProps = {
  now: Temporal.ZonedDateTime;
  trackName: ComponentProps<typeof TalkDescription>["title"];
  roomHashtag: ComponentProps<typeof MetaInformation>["hashtag"][1];
  speakerName: ComponentProps<typeof MetaInformation>["trackName"];
  talkTitle: ComponentProps<typeof TalkDescription>["title"];
  socialLinks: ComponentProps<typeof TalkDescription>["social"];
  goldSponsors: ComponentProps<typeof SponsorArea>["gold"];
  platinumSponsors: ComponentProps<typeof SponsorArea>["platinum"];
};

export const Presentation: FC<PresentationProps> = ({
  now,
  trackName,
  roomHashtag,
  speakerName,
  talkTitle,
  socialLinks,
  goldSponsors,
  platinumSponsors,
}) => {
  const configDayZero = nodecg.bundleConfig.dayZero as {
    year: number;
    month: number;
    day: number;
  };
  const dayZero = Temporal.ZonedDateTime.from({
    year: configDayZero.year,
    month: configDayZero.month,
    day: configDayZero.day,
    timeZone: "Asia/Tokyo",
  });
  const day = Math.abs(dayZero.day - now.day);

  if (day >= 2 || day < 0) {
    console.warn("Invalid day");
  }
  const globalHashtag =
    (
      nodecg.bundleConfig.hashtag as {
        globalHashtag?: string;
      }
    )?.globalHashtag ?? "";

  return (
    <BackGround>
      <SlideArea areaName={gridAreaName.slide} />
      <Camera areaName={gridAreaName.camera} />
      <MetaInformation
        trackName={trackName}
        day={day}
        hashtag={[globalHashtag, roomHashtag]}
        areaName={gridAreaName.meta}
      />
      <SponsorArea
        gold={goldSponsors}
        platinum={platinumSponsors}
        areaName={gridAreaName.sponsor}
      />
      <TalkDescription
        name={speakerName ?? ""}
        title={talkTitle ?? ""}
        social={socialLinks}
        areaName={gridAreaName.description}
      />
    </BackGround>
  );
};
