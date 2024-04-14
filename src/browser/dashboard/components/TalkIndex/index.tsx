import { FC } from "react";

import { Button, Stack } from "@mui/material";

type Props = {
  children: number;
  hasNext: boolean;
  hasPrev: boolean;
  onNext?: () => void;
  onPrev?: () => void;
};

export const TalkIndex: FC<Props> = ({
  children,
  hasNext,
  hasPrev,
  onNext,
  onPrev,
}: Props) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Button
        disabled={!hasPrev}
        size="large"
        variant="outlined"
        onClick={onPrev}
      >
        Prev
      </Button>
      <div>{children}</div>
      <Button
        disabled={!hasNext}
        size="large"
        variant="outlined"
        onClick={onNext}
      >
        Next
      </Button>
    </Stack>
  );
};
