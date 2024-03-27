import { type FC } from "react";

import { Checkbox, Stack } from "@mui/material";

type Props = {
  items: string[];
  onReady?: () => void;
};

export const CheckList: FC<Props> = ({ items }) => {
  return (
    <Stack direction="column" spacing={0.5}>
      {items.map((item) => (
        <label key={item}>
          <Checkbox />
          {item}
        </label>
      ))}
    </Stack>
  );
};
