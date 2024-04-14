import { type FC } from "react";

import { useReplicant } from "../../../../hooks/useReplicant";
import { TimeTableSchema, type TimeTable } from "../../../../schema/TimeTable";
import { Button, Stack, TextField } from "@mui/material";

import { TalkIndex } from "../../../components/TalkIndex";
import { timeTable } from "../../../../dashboard/data/timeTable";

type Props = {
  talkIndex: number;
  room: keyof TimeTable;
};

export const TalkSummary: FC<Props> = ({ talkIndex, room }: Props) => {
  const { value, setValue, reset } = useReplicant<TimeTable>(
    "time-table",
    TimeTableSchema,
    timeTable,
  );

  return (
    <div>
      <h2>現在の発表</h2>
      <TalkIndex>{talkIndex}</TalkIndex>
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
    </div>
  );
};
