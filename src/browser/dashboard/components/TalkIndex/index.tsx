import { FC } from "react";

import { Button, Stack } from "@mui/material";

type Props = {
  children: number;
  onNext?: () => void;
  onPrev?: () => void;
};

export const TalkIndex: FC<Props> = ({ children, onNext, onPrev }: Props) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Button size="large" variant="outlined" onClick={onPrev}>
        Prev
      </Button>
      <div>{children}</div>
      <Button size="large" variant="outlined" onClick={onNext}>
        Next
      </Button>
    </Stack>
  );
};
