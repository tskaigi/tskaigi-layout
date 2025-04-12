import { type FC } from "react";
import { css } from "@emotion/css";

type Props = {
  areaName?: string;
};

export const MetaInformation: FC<Props> = ({ areaName }) => {
  return (
    <div className={styles.container} style={{ gridArea: areaName }}></div>
  );
};

const styles = {
  container: css`
    width: 100%;
    height: 100%;
  `,
};
