import type { FC } from "react";

import { render } from "../../render";
import { css } from "@emotion/css";

import { typescript } from "../../styles/color";

import { TalkDescription } from "../components/TalkDescription";
import { SlideArea } from "../components/SlideArea";
import { Camera } from "../components/Camera";
import { SponsorRoll } from "../components/SponsorRoll";
import { SponsorStatic } from "../components/SponsorStatic";

import {
  ascend,
  dwango,
  helpfeel,
  leverages,
  progate,
} from "../img/sponsor/roll";
import {
  earthbrain,
  googlecloud,
  layerx,
  medley,
  timee,
  toggle,
  ubie,
} from "../img/sponsor/static";

const sponsor = {
  roll: [ascend, dwango, helpfeel, leverages, progate],
  static: [earthbrain, googlecloud, layerx, medley, timee, toggle, ubie],
};

const App: FC = () => {
  return (
    <div>
      <div className={styles.layoutContainer}>
        <div>
          <SlideArea />
        </div>
        <div className={styles.side}>
          <Camera />
          <SponsorRoll images={sponsor.roll} />
          <SponsorStatic images={sponsor.static} />
        </div>
        <div>
          <TalkDescription
            title="発表タイトル"
            name="登壇者名"
            social={{
              github: "ken7253",
              link: "example.com",
              twitter: "ken7253",
            }}
          />
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
