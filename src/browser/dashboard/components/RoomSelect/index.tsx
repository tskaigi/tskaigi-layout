import { FC } from "react";
import { MenuItem, Select } from "@mui/material";

import type { TimeTable } from "../../../schema/TimeTable";

type Room = keyof TimeTable;
type Props = {
  items: TimeTable | undefined;
  current: Room;
};

export const RoomSelect: FC<Props> = ({ items, current }: Props) => {
  if (items === undefined) return null;

  const roomList = Object.keys(items);

  return (
    <Select defaultValue={current}>
      {roomList.map((v) => (
        <MenuItem selected={v === current}>{v}</MenuItem>
      ))}
    </Select>
  );
};
