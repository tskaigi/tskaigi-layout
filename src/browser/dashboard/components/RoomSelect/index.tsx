import { FC, useId } from "react";
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
  const id = useId();

  return (
    <>
      <h3>トラック選択</h3>
      <Select
        value={room}
        onChange={onChangeRoom}
        error={error}
        disabled={disabled}
      >
        {list.map((v) => (
          <MenuItem value={v} key={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
      {errorMessage && (
        <FormHelperText variant="filled">{errorMessage}</FormHelperText>
      )}
    </>
  );
};
