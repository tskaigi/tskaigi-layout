import type { FC } from "react";

import { css } from "@emotion/css";
import { typescript } from "../../../styles/color";

type Props = {
  title: string;
  name: string;
};

export const TalkDescription: FC<Props> = ({ title, name }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

const styles = {
  container: css`
    max-width: 100%;
    padding: 16px;
    background-color: ${typescript.primaryBackground};
    color: ${typescript.main};
  `,
  title: css`
    font-size: 2.5rem;
    padding: 4px 0 8px 0;
    border-bottom: solid 2px ${typescript.main};
  `,
  name: css`
    font-size: 1.5rem;
    padding: 8px 0 0 0;
  `,
};
