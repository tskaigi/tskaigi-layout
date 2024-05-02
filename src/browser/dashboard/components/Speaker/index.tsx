import { ComponentProps, type FC } from "react";

import { Stack, TextField } from "@mui/material";

type Props = {
  title: string;
  name: string;
  disabled?: boolean;
  onChangeTitle?: ComponentProps<typeof TextField>["onChange"];
  onChangeName?: ComponentProps<typeof TextField>["onChange"];
};

export const Speaker: FC<Props> = ({
  title,
  name,
  disabled = false,
  onChangeName,
  onChangeTitle,
}) => {
  return (
    <>
      <h3>登壇情報</h3>
      <Stack gap={2}>
        <TextField
          label="発表者名"
          variant="outlined"
          value={name}
          disabled={disabled}
          onChange={onChangeName}
        />
        <TextField
          label="タイトル"
          variant="outlined"
          value={title}
          disabled={disabled}
          onChange={onChangeTitle}
        />
      </Stack>
    </>
  );
};
