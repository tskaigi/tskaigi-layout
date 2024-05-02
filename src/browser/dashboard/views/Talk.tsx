import { ComponentProps, useState, type FC } from "react";

import { render } from "../../render";
import { TalkSummary } from "./components/TalkSummary";

import { TimeTableSchema, type TimeTable } from "../../schema/TimeTable";
import { ProgressSchema, type Progress } from "../../schema/Progress";
import { LayoutSchema } from "../../schema/Layout";
import { useReplicant } from "../../hooks/useReplicant";
import { timeTable as defaultTimeTable } from "../data/timeTable";
import { hasNextTalk } from "./util/hasNextTalk";

type UIError = ComponentProps<typeof TalkSummary>["error"];

const App: FC = () => {
  const [error, setError] = useState<UIError>(undefined);

  const { value: timeTable, reset: resetTimeTable } = useReplicant<TimeTable>(
    "time-table",
    TimeTableSchema,
    defaultTimeTable,
  );

  const {
    value: progress,
    setValue: setProgress,
    reset: resetProgress,
  } = useReplicant<Progress>("progress", ProgressSchema, {
    index: 0,
    room: "trackOne",
  });

  const { value: layout, setValue: setLayout } = useReplicant(
    "layout",
    LayoutSchema,
    {
      type: "default",
    },
  );

  const pageChangeHandler = (to: "prev" | "next") => {
    if (progress === undefined) return;
    const step = to === "next" ? 1 : -1;

    setProgress({
      ...progress,
      index: progress.index + step,
    });
  };

  const roomChangeHandler: ComponentProps<
    typeof TalkSummary
  >["onChangeRoom"] = (event) => {
    const room = event.target.value as Progress["room"];
    if (progress === undefined || timeTable === undefined) return;
    if (timeTable[room].length === 0) {
      setError({
        kind: "room",
        message: "データが存在しないためトラックを変更できませんでした",
      });

      return;
    }

    setProgress({
      ...progress,
      room,
    });
  };

  return (
    <TalkSummary
      timeTable={timeTable}
      hasNext={hasNextTalk(timeTable, progress)}
      talkIndex={progress?.index ?? 0}
      room={progress?.room ?? "trackOne"}
      onChangeRoom={roomChangeHandler}
      error={error}
      onNext={() => pageChangeHandler("next")}
      onPrev={() => pageChangeHandler("prev")}
      onResetTimetable={resetTimeTable}
      onResetProgress={resetProgress}
    />
  );
};

render(<App />);
