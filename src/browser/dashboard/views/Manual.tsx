import { type FC } from "react";
import { css } from "@emotion/css";

import { render } from "../../render";
import { ManualParse } from "./components/ManualParse";
import content from "../data/manual/index.md?raw";

const App: FC = () => {
  return (
    <div className={styles.container}>
      <ManualParse markdown={content} />
    </div>
  );
};

const styles = {
  container: css`
    max-height: 620px;
    overflow-y: scroll;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.6;
    }

    h2 {
      padding-top: 8px;
      margin-bottom: 8px;
      border-bottom: solid 1px;
    }

    h3::before {
      content: "■";
      padding-right: 4px;
    }

    h4 {
      margin-top: 8px;
    }

    table {
      margin: 8px 0;
      width: 100%;
    }

    th {
      padding: 4px;
      background-color: #333;
      color: #fff;
    }

    td {
      padding: 4px;
      background-color: #575757;
      color: #fff;
    }

    ul {
      padding: 8px 0;
      margin-left: 4px;
      list-style-position: inside;
    }

    p {
      line-height: 1.4;
    }

    strong {
      color: red;
    }
  `,
};

render(<App />);
