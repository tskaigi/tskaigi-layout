import type { FC, ReactNode } from "react";

import { css } from "@emotion/css";
import { typescript } from "../../../styles/color";

import { GitHub, LinkRounded, X, Person } from "@mui/icons-material";
import background from "../../img/background.png";

type Social = Partial<Record<"twitter" | "github" | "link", string>>;

type Props = {
  title: string;
  name: string;
  social?: Social;
};

const iconMap: Record<keyof Social, ReactNode> = {
  link: <LinkRounded fontSize="small" />,
  github: <GitHub fontSize="small" />,
  twitter: <X fontSize="small" />,
};

export const TalkDescription: FC<Props> = ({ title, name, social }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title(title.length > 50)}>{title}</h2>
      <div className={styles.about}>
        <div className={styles.name}>
          <Person fontSize="medium" />
          <span>{name}</span>
        </div>
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 110px;
    height: fit-content;
    max-width: 100%;
    padding: 8px 16px;
    background-image: linear-gradient(
        rgba(255, 255, 255, 50%),
        rgba(255, 255, 255, 100%)
      ),
      url(${background});
    color: ${typescript.main};
    border-radius: 8px;
  `,
  title: (isLong: boolean) => css`
    font-size: ${isLong ? "1.8rem" : "2.25rem"};
  `,
  about: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  name: css`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 1.5rem;
  `,
  social: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
};
