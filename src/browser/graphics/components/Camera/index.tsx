import type { FC } from "react";

import { css } from "@emotion/css";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";

export const Camera: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.offIcon}>
        <VideocamOffRoundedIcon fontSize="inherit" />
      </div>
    </div>
  );
};

const styles = {
  container: css`
    width: 100%;
    aspect-ratio: 1/1;
    background-color: rgb(0, 0, 0, 0.2);
  `,
  offIcon: css`
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 50px;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
  `,
};
