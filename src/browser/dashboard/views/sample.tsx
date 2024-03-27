import type { FC } from "react";

import { render } from "../../render";

import { CheckList } from "../components/CheckList";

const App: FC = () => {
  return (
    <div>
      <h2>開始前チェックリスト</h2>
      <CheckList items={["hoge", "fuga", "piyo"]}></CheckList>
      <h2>終了後チェックリスト</h2>
      <CheckList items={["foo", "bar", "buzz"]}></CheckList>
    </div>
  );
};

render(
  <>
    <App />
  </>,
);
