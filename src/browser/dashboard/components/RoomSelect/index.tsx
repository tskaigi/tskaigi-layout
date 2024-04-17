import { FC } from "react";
import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";

import { type TimeTable } from "../../../schema/TimeTable";

type Room = keyof TimeTable;

type Props = {
  list: string[];
  room: Room;
  onChangeRoom?: (event: SelectChangeEvent<Room>) => void;
};

export const RoomSelect: FC<Props> = ({ list, room, onChangeRoom }: Props) => {
  return (
    <Select defaultValue={room} onChange={onChangeRoom}>
      {list.map((v) => (
        <MenuItem value={v}>{v}</MenuItem>
      ))}
    </Select>
  );
};
