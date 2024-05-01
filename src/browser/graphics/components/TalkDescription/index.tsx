import type { FC, ReactNode } from "react";

import { css } from "@emotion/css";
import { typescript } from "../../../styles/color";

import { GitHub, LinkRounded, X, Person } from "@mui/icons-material";
import background from "../../img/background/cloud.png";

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
      <h2 className={styles.title(title.length > 40)}>{title}</h2>
      <div className={styles.about}>
        <div className={styles.name}>
          <Person fontSize="medium" sx={{ paddingBottom: "3px" }} />
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
    height: 100%;
    width: 100%;
    padding: 8px 16px 8px 16px;
    background-image: linear-gradient(
        rgba(255, 255, 255, 50%),
        rgba(255, 255, 255, 100%)
      ),
      url(${background});
    color: ${typescript.main};
    border-radius: 8px;
  `,
  title: (isLong: boolean) => css`
    font-weight: 800;
    font-size: ${isLong ? "2rem" : "2.25rem"};
  `,
  about: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  `,
  name: css`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    font-size: 1.5rem;
    font-weight: 600;
  `,
  social: css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 1.1rem;
  `,
};
