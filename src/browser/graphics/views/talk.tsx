import type { FC } from "react";
import { Temporal } from "temporal-polyfill";

import { render } from "../../render";
import { Presentation } from "../presentations/talk";

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
      roomHashtag={
        (nodecg.bundleConfig.hashtag as { trackHashtag?: string })
          ?.trackHashtag ?? ""
      }
      trackName={
        (nodecg.bundleConfig.hashtag as { trackName?: string })?.trackName ?? ""
      }
    />
  );
};

render(<App />);
