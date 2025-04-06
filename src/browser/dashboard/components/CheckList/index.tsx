import type { FC, ChangeEvent } from "react";
import { useState } from "react";

import { Checkbox, Stack } from "@mui/material";

type Props = {
  items: string[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (ready: boolean) => void;
};

export const CheckList: FC<Props> = ({ items, onChange }) => {
  const [checkList, setCheckList] = useState(() => items.map(() => false));

  const checkHandler = (_: ChangeEvent, index: number) => {
    setCheckList((prev) => {
      const before = prev.slice(0, index);
      const after = prev.slice(index + 1);
      const result = [...before, !prev[index], ...after];

      if (onChange) {
        onChange(result.every(Boolean));
      }

      return result;
    });
  };

  return (
    <Stack direction="column" spacing={0.5}>
      {items.map((item, index) => (
        <label key={item}>
          <Checkbox
            checked={checkList[index]}
            onChange={(e) => checkHandler(e, index)}
          />
          {item}
        </label>
      ))}
    </Stack>
  );
};
