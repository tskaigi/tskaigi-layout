import type { FC } from "react";

import { render } from "../../render";

import { Workflow } from "./components/Workflow";

const App: FC = () => {
  return <Workflow />;
};

render(
  <>
    <App />
  </>,
);
