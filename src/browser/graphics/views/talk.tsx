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

  const configRoomData = nodecg.bundleConfig.hashtag as {
    globalHashtag?: string;
    track: Array<{
      name: string;
      hashtag: string;
    }>;
  };
  const getRoomIndex = (room: string) => {
    switch (room) {
      case "trackOne":
        return 0;
      case "trackTwo":
        return 1;
      case "trackThree":
        return 2;
      default:
        console.warn(
          `Unknown room identifier: "${room}". Returning -1 as fallback.`,
        );
        return -1;
    }
  };
  const roomIndex = getRoomIndex(progress?.room ?? "");
  const trackName =
    roomIndex >= 0 ? configRoomData.track[roomIndex]?.name : "Unknown Track";
  const trackHashtag =
    roomIndex >= 0 ? configRoomData.track[roomIndex]?.hashtag : "";
  return (
    <Presentation
      now={now}
      talkTitle={talk.title}
      speakerName={talk.speakerName}
      socialLinks={talk.social}
      goldSponsors={sponsor.gold}
      platinumSponsors={sponsor.platinum}
      roomHashtag={trackHashtag ?? ""}
      trackName={trackName ?? ""}
    />
  );
};

render(<App />);
