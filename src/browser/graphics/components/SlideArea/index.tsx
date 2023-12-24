import type { FC } from "react";

import { css } from "@emotion/css";

type Props = {
  size?: "16x9" | "4x3";
};

export const SlideArea: FC<Props> = ({ size = "16x9" }) => {
  return <div className={styles.container}>{size}</div>;
};

const styles = {
  container: css`
    height: 850px;
    aspect-ratio: 16 / 9;
    background-color: rgb(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: 900;
    color: rgb(0, 0, 0, 0.5);
    line-height: 1;
  `,
};
