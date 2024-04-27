import { type FC, type ComponentProps } from "react";

import { useReplicant } from "../../../../hooks/useReplicant";
import { TimeTableSchema, type TimeTable } from "../../../../schema/TimeTable";
import { Button, Stack, TextField } from "@mui/material";

import { RoomSelect } from "../../../components/RoomSelect";
import { TalkIndex } from "../../../components/TalkIndex";

type UIError = {
  kind: "room" | null;
  message: string;
};

type Props = {
  timeTable: TimeTable | undefined;
  talkIndex: number;
  hasNext: boolean;
  room: ComponentProps<typeof RoomSelect>["room"];
  error?: UIError;
  onChangeRoom?: ComponentProps<typeof RoomSelect>["onChangeRoom"];
  onNext?: ComponentProps<typeof TalkIndex>["onNext"];
  onPrev?: ComponentProps<typeof TalkIndex>["onPrev"];
  onReset?: () => void;
};

export const TalkSummary: FC<Props> = ({
  timeTable,
  talkIndex,
  room,
  hasNext,
  error,
  onNext,
  onPrev,
  onChangeRoom,
  onReset,
}: Props) => {
  if (timeTable === undefined) {
    return null;
  }

  return (
    <Stack gap={2} marginTop={2}>
      <h2>現在の発表</h2>
      <RoomSelect
        list={Object.keys(timeTable)}
        room={room}
        error={error?.kind === "room"}
        errorMessage={error?.kind === "room" ? error.message : undefined}
        onChangeRoom={onChangeRoom}
      />
      <TalkIndex
        hasPrev={talkIndex !== 0}
        hasNext={hasNext}
        onNext={onNext}
        onPrev={onPrev}
      >
        {talkIndex + 1}
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
        <Button variant="contained" onClick={onReset}>
          リセット
        </Button>
      </Stack>
    </Stack>
  );
};
