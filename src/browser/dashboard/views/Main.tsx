import { ComponentProps, type FC } from "react";

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

  const { value: progress, setValue: setProgress } = useReplicant<Progress>(
    "progress",
    ProgressSchema,
    {
      index: 0,
      room: "trackOne",
    },
  );

  const hasNextTalk = (
    data: TimeTable | undefined,
    current: Progress | undefined,
  ) => {
    if (current === undefined) return false;
    return data?.[current.room]?.[current.index + 1] !== undefined;
  };

  const progressUpdateHandler: WorkflowProps["onChangeProgress"] = (mode) => {
    if (!hasNextTalk(timeTable, progress)) return;
    if (mode === "during" && progress !== undefined) {
      setProgress({
        ...progress,
        index: progress.index + 1,
      });
    }
  };

  const pageChangeHandler = (to: "prev" | "next") => {
    if (progress === undefined) return;
    const step = to === "next" ? 1 : -1;

    setProgress({
      ...progress,
      index: progress.index + step,
    });
  };

  return (
    <>
      <Workflow onChangeProgress={progressUpdateHandler} />
      <TalkSummary
        timeTable={timeTable}
        hasNext={hasNextTalk(timeTable, progress)}
        talkIndex={progress?.index ?? 0}
        room={progress?.room ?? "trackOne"}
        onNext={() => pageChangeHandler("next")}
        onPrev={() => pageChangeHandler("prev")}
      />
    </>
  );
};

render(
  <>
    <App />
  </>,
);
