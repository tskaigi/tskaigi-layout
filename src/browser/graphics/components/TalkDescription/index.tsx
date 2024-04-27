import type { FC, ReactNode } from "react";

import { css } from "@emotion/css";
import { typescript } from "../../../styles/color";

import { GitHub, LinkRounded, X } from "@mui/icons-material";
import background from "../../img/background.png";

type Social = Partial<Record<"twitter" | "github" | "link", string>>;

type Props = {
  title: string;
  name: string;
  social?: Social;
};

const iconMap: Record<keyof Social, ReactNode> = {
  link: <LinkRounded />,
  github: <GitHub />,
  twitter: <X />,
};

export const TalkDescription: FC<Props> = ({ title, name, social }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.about}>
        <div className={styles.name}>{name}</div>
        <div className={styles.social}>
          {(Object.entries(social ?? []) as [keyof Social, string][]).map(
            ([key, value]) =>
              value !== "" ? (
                <>
                  {iconMap[key]}
                  <div key={key}>{value}</div>
                </>
              ) : null,
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
    background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 0.8)
      ),
      url(${background});
    color: ${typescript.main};
    border-radius: 8px;
  `,
  title: css`
    font-size: 2.5rem;
    padding: 4px 0 8px 0;
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
