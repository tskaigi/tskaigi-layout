import { type FC } from "react";

import { useReplicant } from "../../../../hooks/useReplicant";
import { TimeTableSchema } from "../../../../schema/TimeTable";
import { Stack, TextField } from "@mui/material";

export const TalkSummary: FC = () => {
  const { value } = useReplicant("time-table", TimeTableSchema);

  console.log(value);

  return (
    <div>
      <h2>現在の発表</h2>
      <Stack gap={2}>
        <TextField label="発表者名" variant="outlined" />
        <TextField label="タイトル" variant="outlined" />
      </Stack>
    </div>
  );
};
