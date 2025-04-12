import { type PropsWithChildren, type FC } from "react";
import { css } from "@emotion/css";

import ripple from "./ripple.png?inline";

export const gridAreaName = {
  slide: "slide",
  camera: "camera",
  title: "title",
  sponsor: "sponsor",
  description: "description",
};

export const BackGround: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </main>
  );
};

const styles = {
  container: css`
    height: 1080px;
    width: 1920px;
    overflow: hidden;
    background: linear-gradient(180deg, #3a89c4 0%, #1071d3 100%);
  `,
  inner: css`
    box-sizing: border-box;
    display: block grid;
    grid-template-areas:
      "${gridAreaName.slide} ${gridAreaName.camera}"
      "${gridAreaName.slide} ${gridAreaName.title}"
      "${gridAreaName.slide} ${gridAreaName.sponsor}"
      "${gridAreaName.description} ${gridAreaName.sponsor}";
    grid-template-columns: 1fr 350px;
    grid-template-rows: 350px 110px 1fr 180px;
    gap: 20px;
    padding: 19px;
    width: inherit;
    height: inherit;
    background-image: url(${ripple});
    background-repeat: no-repeat;
    background-size: auto 70%;
    background-position: bottom right;
  `,
};
