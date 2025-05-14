import { useMemo, type FC } from "react";
import { Temporal } from "temporal-polyfill";

import { render } from "../../render";
import { Presentation } from "../presentations/talk";

import { TimeTableSchema, type TimeTable } from "../../schema/TimeTable";
import { ProgressSchema, type Progress } from "../../schema/Progress";
import { useReplicant } from "../../hooks/useReplicant";

import { useGoldSponsors, usePlatinumSponsors } from "../../hooks/assets";

const App: FC = () => {
  const { value: timeTable } = useReplicant<TimeTable>(
    "time-table",
    TimeTableSchema,
  );

  const { value: progress } = useReplicant<Progress>(
    "progress",
    ProgressSchema,
  );

  const platinumSponsors = usePlatinumSponsors();
  const goldSponsors = useGoldSponsors();

  const sponsor = useMemo(
    () => ({
      platinum: platinumSponsors
        .map((asset) => asset.url)
        .toSorted((a, b) => a.localeCompare(b)),
      gold: goldSponsors
        .map((asset) => asset.url)
        .toSorted((a, b) => a.localeCompare(b)),
    }),
    [platinumSponsors, goldSponsors],
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
      goldSponsors={sponsor.gold}
      platinumSponsors={sponsor.platinum}
      roomHashtag={"tskaigi_leverages"} // TODO: 正しい値を算出させる
      trackName="レバレジーズ" // TODO: 正しい値を算出させる
    />
  );
};

render(<App />);
