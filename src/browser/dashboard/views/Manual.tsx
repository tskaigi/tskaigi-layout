import { type FC } from "react";

import { render } from "../../render";
import { ManualParse } from "./components/ManualParse";
import content from "../data/manual/index.md?raw";

const App: FC = () => {
  return <ManualParse markdown={content} />;
};

render(<App />);
