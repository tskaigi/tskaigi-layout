import type { ComponentProps, FC } from "react";
import { Temporal } from "temporal-polyfill";

import { render } from "../../render";

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
  const dayZero = Temporal.ZonedDateTime.from({
    year: 2020,
    month: 5,
    day: 22,
    timeZone: "Asia/Tokyo",
  });
  const day = Math.abs(dayZero.day - now.day);

  if (day >= 2 || day < 0) {
    console.warn("Invalid day");
  }

  return (
    <BackGround>
      <SlideArea areaName={gridAreaName.slide} />
      <Camera areaName={gridAreaName.camera} />
      <MetaInformation
        trackName={trackName}
        day={day}
        hashtag={["tskaigi20205", roomHashtag]}
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

import { TimeTableSchema, type TimeTable } from "../../schema/TimeTable";
import { ProgressSchema, type Progress } from "../../schema/Progress";
import { useReplicant } from "../../hooks/useReplicant";

import platinumSponsor from "../img/sponsor/platinum";
import goldSponsor from "../img/sponsor/gold";

const App: FC = () => {
  const { value: timeTable } = useReplicant<TimeTable>(
    "time-table",
    TimeTableSchema,
  );

  const { value: progress } = useReplicant<Progress>(
    "progress",
    ProgressSchema,
  );

  const getCurrentTalk = (
    data: TimeTable | undefined,
    current: Progress | undefined,
    fallback: TimeTable[Progress["room"]][number],
  ) => data?.[current?.room ?? "trackOne"]?.[current?.index ?? 0] ?? fallback;

  const talk = getCurrentTalk(timeTable, progress, {
    speakerName: "",
    title: "",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  });

  const now = Temporal.ZonedDateTime.from(
    Temporal.Now.zonedDateTimeISO("Asia/Tokyo"),
  );

  return (
    <Presentation
      now={now}
      talkTitle={talk.title}
      speakerName={talk.speakerName}
      socialLinks={talk.social}
      goldSponsors={goldSponsor}
      platinumSponsors={platinumSponsor}
      roomHashtag={"tskaigi_leverages"} // TODO: 正しい値を算出させる
      trackName="レバレジーズ" // TODO: 正しい値を算出させる
    />
  );
};

render(<App />);
