import type { FC } from "react";

import { css } from "@emotion/css";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";

import logo from "../../../assets/image/logo/default.svg";

export const Camera: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.offIcon}>
          <VideocamOffRoundedIcon fontSize="inherit" />
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="TSKaigi" />
        <span className={styles.year}>
          2024
          <br />
          Nakano
        </span>
      </div>
    </>
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
  logoWrapper: css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 60px;
    width: 100%;
    background-color: rgba(255, 255, 255, 100%);
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
};
