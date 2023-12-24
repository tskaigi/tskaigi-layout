import type { FC } from "react";

import { render } from "../../render";
import { css } from "@emotion/css";

import { typescript } from "../../styles/color";

import { TalkDescription } from "../components/TalkDescription";
import { SlideArea } from "../components/SlideArea";
import { Camera } from "../components/Camera";
import { SponsorRoll } from "../components/SponsorRoll";
import { SponsorStatic } from "../components/SponsorStatic";

const App: FC = () => {
  return (
    <div>
      <div className={styles.layoutContainer}>
        <div>
          <SlideArea />
        </div>
        <div className={styles.side}>
          <Camera />
          <SponsorRoll />
          <SponsorStatic />
        </div>
        <div>
          <TalkDescription title="発表タイトル" name="登壇者名" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  layoutContainer: css`
    box-sizing: border-box;
    width: 1920px;
    height: 1080px;
    padding: 20px;
    background-color: ${typescript.main};
    display: grid;
    grid-template-columns: 1500px 1fr;
    grid-template-rows: auto 1fr;
    gap: 16px;
  `,

  side: css`
    display: flex;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    flex-direction: column;
    gap: 8px;
  `,
};

render(
  <>
    <App />
  </>,
);
