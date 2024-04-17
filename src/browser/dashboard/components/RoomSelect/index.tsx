import { FC } from "react";
import {
  FormHelperText,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

import { type TimeTable } from "../../../schema/TimeTable";

type Room = keyof TimeTable;

type Props = {
  list: string[];
  room: Room;
  error?: boolean;
  errorMessage?: string;
  onChangeRoom?: (event: SelectChangeEvent<Room>) => void;
};

export const RoomSelect: FC<Props> = ({
  list,
  room,
  error,
  onChangeRoom,
  errorMessage,
}: Props) => {
  return (
    <>
      <Select value={room} onChange={onChangeRoom} error={error}>
        {list.map((v) => (
          <MenuItem value={v}>{v}</MenuItem>
        ))}
      </Select>
      {errorMessage && (
        <FormHelperText variant="filled">{errorMessage}</FormHelperText>
      )}
    </>
  );
};
