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
  disabled?: boolean;
  onChangeRoom?: (event: SelectChangeEvent<Room>) => void;
};

export const RoomSelect: FC<Props> = ({
  list,
  room,
  error,
  errorMessage,
  disabled = false,
  onChangeRoom,
}: Props) => {
  return (
    <>
      <Select
        value={room}
        onChange={onChangeRoom}
        error={error}
        disabled={disabled}
      >
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
