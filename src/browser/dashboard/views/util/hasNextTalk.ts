import type { TimeTable } from "../../../schema/TimeTable";
import type { Progress } from "../../../schema/Progress";

export const hasNextTalk = (
  data: TimeTable | undefined,
  current: Progress | undefined,
) => {
  if (current === undefined) return false;
  return data?.[current.room]?.[current.index + 1] !== undefined;
};
