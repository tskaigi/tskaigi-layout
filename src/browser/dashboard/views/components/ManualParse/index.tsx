import { type FC } from "react";

import markdownIt from "markdown-it";

const md = markdownIt();

type Props = {
  markdown: string;
};

export const ManualParse: FC<Props> = ({ markdown }) => {
  const content = md.render(markdown);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};
