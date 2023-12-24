import type { FC } from "react";

import { render } from "../../render";
import { css } from "@emotion/css";

import { Base } from "../components/Base";
import { TalkDescription } from "../components/TalkDescription";
import { SlideArea } from "../components/SlideArea";
import { SponsorRoll } from "../components/SponsorRoll";

const App: FC = () => {
  return (
    <Base>
      <div className={styles.layoutContainer}>
        <div>
          <SlideArea />
        </div>
        <div>
          <SponsorRoll />
        </div>
        <div>
          <TalkDescription title="発表タイトル" name="登壇者名" />
        </div>
      </div>
    </Base>
  );
};

const styles = {
  layoutContainer: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
  `,
};

render(
  <>
    <App />
  </>,
);
