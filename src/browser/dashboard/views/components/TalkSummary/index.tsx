import { type FC } from "react";

import { useReplicant } from "../../../../hooks/useReplicant";
import { TimeTableSchema, type TimeTable } from "../../../../schema/TimeTable";
import { Button, Stack, TextField } from "@mui/material";

import { RoomSelect } from "../../../components/RoomSelect";
import { TalkIndex } from "../../../components/TalkIndex";

type Props = {
  timeTable: TimeTable | undefined;
  talkIndex: number;
  hasNext: boolean;
  room: keyof TimeTable;
  onNext?: () => void;
  onPrev?: () => void;
};

export const TalkSummary: FC<Props> = ({
  timeTable,
  talkIndex,
  room,
  hasNext,
  onNext,
  onPrev,
}: Props) => {
  const { reset } = useReplicant<TimeTable>(
    "time-table",
    TimeTableSchema,
    timeTable,
  );

  if (timeTable === undefined) {
    return null;
  }

  return (
    <Stack gap={2}>
      <h2>現在の発表</h2>
      <RoomSelect list={Object.keys(timeTable)} room={room} />
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
          value={timeTable?.[room][talkIndex].speakerName ?? ""}
        />
        <TextField
          label="タイトル"
          variant="outlined"
          value={timeTable?.[room][talkIndex].title ?? ""}
        />
        <Button variant="contained" onClick={() => reset()}>
          リセット
        </Button>
      </Stack>
    </Stack>
  );
};
