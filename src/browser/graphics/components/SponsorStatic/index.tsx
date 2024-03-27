import type { FC } from "react";

import { css } from "@emotion/css";

type Props = {
  images: string[];
};

export const SponsorStatic: FC<Props> = ({ images }) => {
  return (
    <div className={styles.container}>
      {images.map((image) => {
        return (
          <div key={image} className={styles.item}>
            <img className={styles.image} src={image} />
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 4px;
  `,
  item: css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: calc(100% / 2);
    padding: 4px;
  `,
  image: css`
    max-height: 100%;
    max-width: 100%;
  `,
};
