import { ChangeEvent, ComponentProps, useState, type FC } from "react";

import { render } from "../../render";
import { TalkSummary } from "./components/TalkSummary";

import { TimeTableSchema, type TimeTable } from "../../schema/TimeTable";
import { ProgressSchema, type Progress } from "../../schema/Progress";
import { Layout, LayoutSchema } from "../../schema/Layout";
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

  const { value: layout, setValue: setLayout } = useReplicant<Layout>(
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

    let index = progress.index;
    // ルーム変更時に、現在のindexが新しいルームの発表数を超えていたら調整する
    if (index >= timeTable[room].length) {
      index = timeTable[room].length - 1;
    }

    setProgress({
      room,
      index,
    });
  };

  const layoutChangeHandler = (value: unknown) => {
    if (value === "translation") {
      setLayout({ type: value, frame: "" });
    } else {
      setLayout({ type: "default" });
    }
  };

  const frameURLChangeHandler = (event: ChangeEvent) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { value } = event.target;

    if (typeof value !== "string") return;
    if (value.trim() === "") {
      setLayout({ type: "translation", frame: "" });
    } else {
      setLayout({ type: "translation", frame: value });
    }
  };

  return (
    <TalkSummary
      timeTable={timeTable}
      hasNext={hasNextTalk(timeTable, progress)}
      talkIndex={progress?.index ?? 0}
      room={progress?.room ?? "trackOne"}
      onChangeRoom={roomChangeHandler}
      error={error}
      layout={layout ?? { type: "default" }}
      onNext={() => pageChangeHandler("next")}
      onPrev={() => pageChangeHandler("prev")}
      onResetTimetable={resetTimeTable}
      onResetProgress={resetProgress}
      onChangeLayout={(_, v) => layoutChangeHandler(v)}
      onChangeFrameURL={frameURLChangeHandler}
    />
  );
};

render(<App />);
