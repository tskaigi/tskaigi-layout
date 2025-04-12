import type { FC } from "react";

import { CoPresent } from "@mui/icons-material";
import { css } from "@emotion/css";

type Props = {
  areaName?: string;
};

export const SlideArea: FC<Props> = ({ areaName }) => {
  return (
    <div className={styles.container} style={{ gridArea: areaName }}>
      <CoPresent className={styles.icon} fontSize="inherit" />
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 8rem;
  `,
  icon: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.5);
    font-size: 8rem;
  `,
};
