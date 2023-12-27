import type { FC } from "react";

import { css } from "@emotion/css";
import { typescript } from "../../../styles/color";

type Social = Partial<Record<"twitter" | "github" | "link", string>>;

type Props = {
  title: string;
  name: string;
  social?: Social;
};

export const TalkDescription: FC<Props> = ({ title, name, social }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.about}>
        <div className={styles.name}>{name}</div>
        <div className={styles.social}>
          {Object.entries(social ?? []).map(([key, value]) => {
            return <div key={key}>{value}</div>;
          })}
        </div>
      </div>
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
  about: css`
    display: flex;
    align-items: center;
    padding: 8px 0 0 0;
  `,
  name: css`
    font-size: 1.5rem;
  `,
  social: css`
    display: flex;
    gap: 8px;
  `,
};
