import { FC, PropsWithChildren } from "react";

import { Button, Stack } from "@mui/material";

type Props = PropsWithChildren<{
  hasNext: boolean;
  hasPrev: boolean;
  disabled?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}>;

export const TalkIndex: FC<Props> = ({
  children,
  hasNext,
  hasPrev,
  disabled = false,
  onNext,
  onPrev,
}: Props) => {
  return (
    <>
      <h3>トラック進行状況</h3>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Button
          disabled={!hasPrev || disabled}
          size="large"
          variant="outlined"
          onClick={onPrev}
        >
          Prev
        </Button>
        <div>{children}</div>
        <Button
          disabled={!hasNext || disabled}
          size="large"
          variant="outlined"
          onClick={onNext}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};
