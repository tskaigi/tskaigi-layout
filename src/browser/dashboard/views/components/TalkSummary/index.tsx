import { type FC, type ComponentProps, useState } from "react";

import { type TimeTable } from "../../../../schema/TimeTable";
import {
  Button,
  FormControlLabel,
  Stack,
  TextField,
  Switch,
} from "@mui/material";
import { Dangerous } from "@mui/icons-material";

import { RoomSelect } from "../../../components/RoomSelect";
import { TalkIndex } from "../../../components/TalkIndex";
import { Speaker } from "../../../components/Speaker";

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
  onResetTimetable?: () => void;
  onResetProgress?: () => void;
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
  onResetTimetable,
  onResetProgress,
}: Props) => {
  const [isLock, setIsLock] = useState(true);
  const [layout, setLayout] =
    useState<ComponentProps<typeof Speaker>["layout"]>("default");

  const changeLayoutHandler: ComponentProps<
    typeof Speaker
  >["onChangeLayout"] = (_, value) => {
    setLayout(value as ComponentProps<typeof Speaker>["layout"]);
  };

  return (
    <>
      <Stack gap={2} marginTop={2}>
        <h2>現在の発表</h2>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={() => setIsLock((prev) => !prev)}
            />
          }
          label="操作ロック"
        />
        {timeTable !== undefined ? (
          <>
            <RoomSelect
              list={Object.keys(timeTable)}
              room={room}
              error={error?.kind === "room"}
              errorMessage={error?.kind === "room" ? error.message : undefined}
              disabled={isLock}
              onChangeRoom={onChangeRoom}
            />
            <TalkIndex
              hasPrev={talkIndex !== 0}
              hasNext={hasNext}
              onNext={onNext}
              onPrev={onPrev}
              disabled={isLock}
            >
              {`${talkIndex + 1} / ${timeTable[room].length}`}
            </TalkIndex>
            <Speaker
              name={timeTable[room][talkIndex].speakerName ?? ""}
              title={timeTable[room][talkIndex].title ?? ""}
              layout={layout}
              disabled={isLock}
              onChangeLayout={changeLayoutHandler}
            />
          </>
        ) : (
          <p>
            データに不整合が発生しました。
            <br />
            管理者に確認しリセット処理を行ってください
          </p>
        )}
      </Stack>
      <Stack direction="row" gap={2} marginTop={2}>
        <Button
          color="error"
          variant="contained"
          onClick={onResetTimetable}
          startIcon={<Dangerous />}
          disabled={isLock}
        >
          タイムテーブルをリセット
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={onResetProgress}
          startIcon={<Dangerous />}
          disabled={isLock}
        >
          進行状況をリセット
        </Button>
      </Stack>
    </>
  );
};
