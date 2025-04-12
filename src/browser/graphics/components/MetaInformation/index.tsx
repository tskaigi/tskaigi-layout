import { type FC } from "react";
import { css } from "@emotion/css";

import tskaigi from "./tskaigi.svg?inline";

type Props = {
  trackName: string;
  hashtag: [string, string];
  day: 1 | 2;
  areaName?: string;
};

export const MetaInformation: FC<Props> = ({
  trackName,
  hashtag,
  day,
  areaName,
}) => {
  return (
    <div className={styles.container} style={{ gridArea: areaName }}>
      <img className={styles.logo} src={tskaigi} alt="TSKaigiロゴ" />
      <span className={styles.trackName}>{trackName}トラック</span>
      <time className={styles.day} dateTime={new Date().toISOString()}>
        Day {day}
      </time>
      <ul className={styles.hashtag}>
        {hashtag.map((tag) => {
          return <li key={tag}>#{tag}</li>;
        })}
      </ul>
    </div>
  );
};

const styles = {
  container: css`
    display: block grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2px 15px;
    padding: 12px 8px;
    background-color: rgba(255, 255, 255, 1);
    opacity: 0.9;
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
    border-radius: 5px;
  `,
  logo: css`
    max-height: 37px;
    width: auto;
    margin: auto 16px;
  `,
  trackName: css`
    display: inline;
    width: fit-content;
    margin: auto;
  `,
  day: css`
    text-transform: uppercase;
    margin: auto;
  `,
  hashtag: css`
    margin: 0;
    padding: 0;
    display: block flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    font-size: 14px;
    font-weight: 700;
    color: #1071d3;
    gap: 0 10px;
    margin: auto;
  `,
};
