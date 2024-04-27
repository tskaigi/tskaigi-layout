import { type HTMLAttributes } from "react";

import { Horizontal } from "./Horizontal";
import { Vertical } from "./Vertical";
import { Square } from "./Square";
import { Round } from "./Round";

export type LogoProps = HTMLAttributes<HTMLDivElement>;

export const TSKaigiLogo = {
  Horizontal,
  Vertical,
  Square,
  Round,
};
