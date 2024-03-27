import { FC, ChangeEventHandler, useState } from "react";

import { useTalkStatus } from "./useTalkStatus";
import { Stack, TextField } from "@mui/material";

import { updateByIndex } from "../../util/updateByIndex";
import { type TimeTable } from "../../../data/timeTable";

type Track = keyof TimeTable;

export const TalkSummary: FC = () => {
  const [track, setTrack] = useState<Track>("trackOne");
  const [trackIndex, setTrackIndex] = useState(0);
  const [talkStatus, setTalkStatus] = useTalkStatus(track);

  console.log({ talkStatus, track });

  const changeNameHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    if (talkStatus === undefined) return;
    const updateItem: (typeof talkStatus)[number] = {
      title: talkStatus[trackIndex].title,
      speakerName: target.value,
    };

    setTalkStatus(updateByIndex(talkStatus, trackIndex, updateItem));
  };

  const changeTitleHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    console.log(event);
  };

  return (
    <div>
      <h2>現在の発表</h2>
      <Stack gap={2}>
        <TextField
          label="発表者名"
          variant="outlined"
          value={talkStatus?.[trackIndex].speakerName}
          onChange={changeNameHandler}
        />
        <TextField
          label="タイトル"
          variant="outlined"
          value={talkStatus?.[trackIndex].title}
          onChange={changeTitleHandler}
        />
      </Stack>
    </div>
  );
};
