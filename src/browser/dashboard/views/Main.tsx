import { ComponentProps, useEffect, useState, type FC } from "react";

import { render } from "../../render";

import { Workflow } from "./components/Workflow";
import { TalkSummary } from "./components/TalkSummary";

import { TimeTableSchema, type TimeTable } from "../../schema/TimeTable";
import { ProgressSchema, type Progress } from "../../schema/Progress";
import { useReplicant } from "../../hooks/useReplicant";

type WorkflowProps = ComponentProps<typeof Workflow>;

const App: FC = () => {
  const { value: timeTable } = useReplicant<TimeTable>(
    "time-table",
    TimeTableSchema,
  );
  const {
    value: progress,
    setValue: setProgress,
    reset,
  } = useReplicant<Progress>("progress", ProgressSchema, {
    index: 0,
    room: "trackOne",
  });

  const hasNextTalk = (
    data: TimeTable | undefined,
    current: Progress | undefined,
  ) => {
    if (current === undefined) return false;
    return data?.[current.room]?.[current.index + 1] !== undefined;
  };

  console.log({ hasNext: hasNextTalk(timeTable, progress) });

  const progressUpdateHandler: WorkflowProps["onChangeProgress"] = (mode) => {
    if (mode === "during" && progress !== undefined) {
      setProgress({
        ...progress,
        index: progress.index + 1,
      });
    }
  };

  return (
    <>
      <Workflow onChangeProgress={progressUpdateHandler} />
      <TalkSummary
        talkIndex={progress?.index ?? 0}
        room={progress?.room ?? "trackOne"}
      />
    </>
  );
};

render(
  <>
    <App />
  </>,
);
