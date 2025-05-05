import type { FC, ReactNode } from "react";
import { match, P } from "ts-pattern";

import { css } from "@emotion/css";
import leftIcon from "./left-icon.svg";
import rightIcon from "./right-icon.svg";

import { GitHub, LinkRounded, X } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Social = Partial<Record<"twitter" | "github" | "link", string>>;

type Props = {
  title: string;
  name: string;
  social?: Social;
  areaName?: string;
};

const iconMap: Record<string, ReactNode> = {
  link: <LinkRounded fontSize="small" />,
  github: <GitHub fontSize="small" />,
  twitter: <X fontSize="small" />,
};

const urlFormat = (url: string) => {
  const maybeURL = URL.parse(url);
  if (maybeURL == null) {
    return url;
  }
  const { hostname, pathname } = maybeURL;
  return pathname === "/" ? hostname : `${hostname}${pathname}`;
};

export const TalkDescription: FC<Props> = ({
  title,
  name,
  social,
  areaName = "",
}) => {
  const socials = Object.entries(social ?? {}).filter(([, v]) => v !== "");

  return (
    <div style={{ gridArea: areaName }} className={styles.container}>
      <img className={styles.leftIcon} src={leftIcon} alt=""></img>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.info}>
          <p className={styles.name}>
            <AccountCircleIcon />
            {name}
          </p>
          <ul className={styles.socialList}>
            {socials.map(([key, v]) => (
              <li className={styles.socialItem} key={v}>
                {match(key)
                  .with(P.union("link", "github", "twitter"), (p) => iconMap[p])
                  .otherwise(() => null)}
                {urlFormat(v)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img className={styles.rightIcon} src={rightIcon} alt=""></img>
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    height: 150px;
    padding: 34px 0 0 5px;
  `,
  leftIcon: css`
    position: absolute;
    top: 0;
    left: 0;
  `,
  rightIcon: css`
    position: absolute;
    top: 22px;
    right: 8px;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
  `,
  title: css`
    margin: 0;
    padding: 24px 160px 0 62px;
    color: #2a2a2d;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.5;
    text-wrap: balance;
  `,
  info: css`
    padding: 0 28px 20px 0;
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
  `,
  name: css`
    margin: 0;
    display: block flex;
    align-items: center;
    gap: 4px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.8;
    color: #2a2a2d;
  `,
  socialList: css`
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    font-weight: 700;
    font-size: 1rem;
    gap: 10px;
    color: #2a2a2d;
  `,
  socialItem: css`
    display: block flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  `,
};
