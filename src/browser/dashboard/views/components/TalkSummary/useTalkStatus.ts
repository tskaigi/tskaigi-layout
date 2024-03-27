import { useEffect, useState } from "react";

import { timeTable, type TimeTable } from "../../../data/timeTable";

type Track = keyof TimeTable;

export const useTalkStatus = (track: Track) => {
  const replicant = nodecg.Replicant("talkStatus", {
    defaultValue: timeTable,
  });
  const [value, setInternalValue] = useState<TimeTable | undefined>(undefined);

  const setValue = (currentTrack: TimeTable[Track]) => {
    if (value === undefined) return;
    // @ts-expect-error -- FIXME: 代入するべき値がreadonlyになっているので一旦エラーを抑制
    replicant.value = { ...value, [track]: currentTrack };
  };

  useEffect(() => {
    const handler = (next: TimeTable | undefined) => {
      console.log("update replicant", next);
      setInternalValue(next);
    };

    replicant.addListener("change", handler);

    return () => replicant.removeListener("change", handler);
  }, [replicant]);

  const currentTrackValue = value?.[track];

  return [currentTrackValue, setValue] as const;
};
