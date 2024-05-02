import { ComponentProps, type FC } from "react";

import { type Layout } from "../../../schema/Layout";

import {
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

type Props = {
  title: string;
  name: string;
  disabled?: boolean;
  layout: Layout["type"];
  onChangeTitle?: ComponentProps<typeof TextField>["onChange"];
  onChangeName?: ComponentProps<typeof TextField>["onChange"];
  onChangeLayout?: ComponentProps<typeof ToggleButtonGroup>["onChange"];
};

export const Speaker: FC<Props> = ({
  title,
  name,
  layout,
  disabled = false,
  onChangeName,
  onChangeTitle,
  onChangeLayout,
}) => {
  return (
    <>
      <h3>登壇情報</h3>
      <Stack direction="row" gap={2} sx={{ alignItems: "center" }}>
        レイアウトタイプ
        <ToggleButtonGroup
          exclusive
          color="info"
          value={layout}
          disabled={disabled}
          onChange={onChangeLayout}
        >
          <ToggleButton value="default">デフォルト</ToggleButton>
          <ToggleButton value="translation">翻訳表示用</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
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
