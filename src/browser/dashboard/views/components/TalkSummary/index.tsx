import { type FC } from "react";

import { useReplicant } from "../../../../hooks/useReplicant";
import { TimeTableSchema, type TimeTable } from "../../../../schema/TimeTable";
import { Button, Stack, TextField } from "@mui/material";

import { TalkIndex } from "../../../components/TalkIndex";
import { timeTable } from "../../../../dashboard/data/timeTable";

type Props = {
  talkIndex: number;
  hasNext: boolean;
  room: keyof TimeTable;
  onNext?: () => void;
  onPrev?: () => void;
};

export const TalkSummary: FC<Props> = ({
  talkIndex,
  room,
  hasNext,
  onNext,
  onPrev,
}: Props) => {
  const { value, reset } = useReplicant<TimeTable>(
    "time-table",
    TimeTableSchema,
    timeTable,
  );

  return (
    <Stack gap={2}>
      <h2>現在の発表</h2>
      <TalkIndex
        hasPrev={talkIndex !== 0}
        hasNext={hasNext}
        onNext={onNext}
        onPrev={onPrev}
      >
        {talkIndex}
      </TalkIndex>
      <Stack gap={2}>
        <TextField
          label="発表者名"
          variant="outlined"
          value={value?.[room][talkIndex].speakerName ?? ""}
        />
        <TextField
          label="タイトル"
          variant="outlined"
          value={value?.[room][talkIndex].title ?? ""}
        />
        <Button variant="contained" onClick={() => reset()}>
          リセット
        </Button>
      </Stack>
    </Stack>
  );
};
