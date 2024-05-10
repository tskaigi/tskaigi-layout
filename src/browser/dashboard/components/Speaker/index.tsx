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
  layout: Layout;
  onChangeTitle?: ComponentProps<typeof TextField>["onChange"];
  onChangeName?: ComponentProps<typeof TextField>["onChange"];
  onChangeLayout?: ComponentProps<typeof ToggleButtonGroup>["onChange"];
  onChangeFrameURL?: ComponentProps<typeof TextField>["onChange"];
};

export const Speaker: FC<Props> = ({
  title,
  name,
  layout,
  disabled = false,
  onChangeName,
  onChangeTitle,
  onChangeLayout,
  onChangeFrameURL,
}) => {
  return (
    <>
      <h3>登壇情報</h3>
      <Stack direction="row" gap={2} sx={{ alignItems: "center" }}>
        レイアウトタイプ
        <ToggleButtonGroup
          exclusive
          color="info"
          value={layout.type}
          disabled={disabled}
          onChange={onChangeLayout}
        >
          <ToggleButton
            size="small"
            value="default"
            sx={{ fontWeight: layout.type === "default" ? 900 : 500 }}
          >
            デフォルト
          </ToggleButton>
          <ToggleButton
            size="small"
            value="translation"
            sx={{ fontWeight: layout.type === "translation" ? 900 : 500 }}
          >
            翻訳表示用
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {layout.type === "translation" && (
        <TextField label="URL" type="url" onChange={onChangeFrameURL}>
          {layout.frame}
        </TextField>
      )}

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
