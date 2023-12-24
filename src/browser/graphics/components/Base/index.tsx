import type { FC, PropsWithChildren } from "react";

import { css } from "@emotion/css";
import { typescript } from "../../../styles/color";

type Props = PropsWithChildren;

export const Base: FC<Props> = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};

const styles = {
  background: css`
    height: 1080px;
    width: 1920px;
    background-color: ${typescript.main};
  `,
};
