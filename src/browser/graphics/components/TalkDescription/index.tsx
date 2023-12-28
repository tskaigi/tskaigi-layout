import type { FC, ReactNode } from "react";

import { css } from "@emotion/css";
import { typescript } from "../../../styles/color";

import { GitHub, Twitter, LinkRounded } from "@mui/icons-material";

type Social = Partial<Record<"twitter" | "github" | "link", string>>;

type Props = {
  title: string;
  name: string;
  social?: Social;
};

const iconMap: Record<keyof Social, ReactNode> = {
  link: <LinkRounded />,
  github: <GitHub />,
  twitter: <Twitter />,
};

export const TalkDescription: FC<Props> = ({ title, name, social }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.about}>
        <div className={styles.name}>{name}</div>
        <div className={styles.social}>
          {(Object.entries(social ?? []) as [keyof Social, string][]).map(
            ([key, value]) => {
              return (
                <>
                  {iconMap[key]}
                  <div key={key}>{value}</div>
                </>
              );
            },
          )}
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
    justify-content: space-between;
    padding: 8px 0 0 0;
  `,
  name: css`
    font-size: 1.5rem;
  `,
  social: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
};
