import { type FC, type ComponentProps } from "react";
import { render } from "../../render";

import { useReplicant } from "../../hooks/useReplicant";
import { TimeTableSchema } from "../../schema/TimeTable";
import { ProgressSchema } from "../../schema/Progress";
import { Workflow } from "./components/Workflow";
import { hasNextTalk } from "./util/hasNextTalk";

type WorkflowProps = ComponentProps<typeof Workflow>;

const App: FC = () => {
  const { value: progress, setValue: setProgress } = useReplicant(
    "progress",
    ProgressSchema,
  );

  const { value: timeTable } = useReplicant("time-table", TimeTableSchema);

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
