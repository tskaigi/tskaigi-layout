import type { FC } from "react";

import { render } from "../../render";

import { Workflow } from "./components/Workflow";
import { TalkSummary } from "./components/TalkSummary";

const App: FC = () => {
  return (
    <>
      <Workflow />
      <TalkSummary />
    </>
  );
};

render(
  <>
    <App />
  </>,
);
