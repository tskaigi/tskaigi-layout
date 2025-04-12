import type { FC } from "react";

import { css } from "@emotion/css";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";

type Props = {
  areaName?: string;
};

export const Camera: FC<Props> = ({ areaName = "" }) => {
  return (
    <div className={styles.container} style={{ gridArea: areaName }}>
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
  title: css`
    background-color: rgba(255, 255, 255, 100%);
  `,
  logoWrapper: css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 60px;
    width: 100%;
  `,
  logo: css`
    max-height: 100%;
    width: auto;
    transform: translateY(2.5px);
  `,
  year: css`
    position: relative;
    padding: 0 0 10px 24px;
    font-weight: 700;
    color: #1249d8;
    line-height: 1.2;

    ::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 10px;
      width: 2px;
      height: 32px;
      background-color: #1249d8;
      opacity: 0.2;
      z-index: 1;
    }
  `,
  hashTagArea: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 8px;
    background-color: #eee;
  `,

  hashTag: css`
    color: #1249d8;
    font-size: 1.1rem;
    letter-spacing: 0.025em;
    font-weight: 650;

    ::before {
      content: "#";
    }
  `,
};
