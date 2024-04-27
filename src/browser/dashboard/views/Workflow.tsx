import { type FC, type ComponentProps } from "react";
import { render } from "../../render";

import { useReplicant } from "../../hooks/useReplicant";
import { type TimeTable, TimeTableSchema } from "../../schema/TimeTable";
import { type Progress, ProgressSchema } from "../../schema/Progress";
import { Workflow } from "./components/Workflow";
import { hasNextTalk } from "./util/hasNextTalk";

type WorkflowProps = ComponentProps<typeof Workflow>;

const App: FC = () => {
  const { value: progress, setValue: setProgress } = useReplicant<Progress>(
    "progress",
    TimeTableSchema,
  );

  const { value: timeTable } = useReplicant<TimeTable>(
    "time-table",
    ProgressSchema,
  );

  const progressUpdateHandler: WorkflowProps["onChangeProgress"] = (mode) => {
    if (!hasNextTalk(timeTable, progress)) return;
    if (mode === "during" && progress !== undefined) {
      setProgress({
        ...progress,
        index: progress.index + 1,
      });
    }
  };

  return <Workflow onChangeProgress={progressUpdateHandler} />;
};

render(
  <>
    <App />
  </>,
);
