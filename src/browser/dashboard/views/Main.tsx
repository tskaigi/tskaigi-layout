import { useState, type FC } from "react";

import { render } from "../../render";

import { Workflow } from "./components/Workflow";
import { TalkSummary } from "./components/TalkSummary";

import { TimeTable } from "../../schema/TimeTable";

type Room = keyof TimeTable;

const App: FC = () => {
  const [room, setRoom] = useState<Room>("trackOne");
  const [talkIndex, setTalkIndex] = useState(0);

  return (
    <>
      <Workflow />
      <TalkSummary talkIndex={talkIndex} room={room} />
    </>
  );
};

render(
  <>
    <App />
  </>,
);
