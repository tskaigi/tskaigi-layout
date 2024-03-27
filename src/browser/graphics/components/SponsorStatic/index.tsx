import type { FC } from "react";

import { css } from "@emotion/css";

const dummyImages = new Array(6).fill("https://placehold.jp/300x150.png");

type Props = {
  images: string[];
};

export const SponsorStatic: FC<Props> = ({ images }) => {
  return (
    <div className={styles.container}>
      {images.map((image) => {
        return <img className={styles.image} key={image} src={image} />;
      })}
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4px;
  `,
  image: css`
    width: calc(calc(100% / 3) - 4px);
  `,
};
