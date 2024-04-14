import type { FC } from "react";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";

import { CheckList } from "../../../components/CheckList";
import { Button, Stack } from "@mui/material";

type Progress = "standby" | "during";

type Props = {
  onChangeProgress?: (mode: Progress) => void;
};

export const Workflow: FC<Props> = ({ onChangeProgress }: Props) => {
  const [progress, setProgress] = useState<Progress>("standby");
  const [toNext, setToNext] = useState(false);

  const progressUpdateHandler = () => {
    setToNext(false);
    match(progress)
      .with("standby", () => {
        setProgress("during");
        onChangeProgress?.("during");
      })
      .with("during", () => {
        setProgress("standby");
        onChangeProgress?.("standby");
      })
      .exhaustive();
  };

  return (
    <Stack spacing={2}>
      {match(progress)
        .with("standby", (pattern) => (
          <>
            <h2>開始前チェックリスト</h2>
            <CheckList
              items={["hoge", "fuga", "piyo"]}
              onChange={setToNext}
              key={pattern}
            />
          </>
        ))
        .with("during", (pattern) => (
          <>
            <h2>終了後チェックリスト</h2>
            <CheckList
              items={["foo", "bar", "buzz"]}
              onChange={setToNext}
              key={pattern}
            />
          </>
        ))
        .exhaustive()}
      <Button
        variant="contained"
        disabled={!toNext}
        onClick={progressUpdateHandler}
      >
        {match(progress)
          .with("standby", () => "開始")
          .with("during", () => "終了")
          .exhaustive()}
      </Button>
    </Stack>
  );
};
