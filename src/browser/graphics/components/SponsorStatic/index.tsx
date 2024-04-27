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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `,
  item: css`
    box-sizing: border-box;
    height: 75px;
    width: auto;
    border-radius: 8px;
    overflow: hidden;
  `,
  image: css`
    height: 100%;
    width: auto;
  `,
};
