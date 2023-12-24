import type { FC } from "react";

import { render } from "../../render";

import { Base } from "../components/Base";
import { TalkDescription } from "../components/TalkDescription";

const App: FC = () => {
  return (
    <Base>
      <TalkDescription title="発表タイトル" name="登壇者名" />
    </Base>
  );
};

render(
  <>
    <App />
  </>,
);
