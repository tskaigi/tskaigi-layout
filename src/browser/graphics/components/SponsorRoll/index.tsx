import type { FC } from "react";

import { css } from "@emotion/css";

const mockImage = [
  "https://placehold.jp/3d4070/ffffff/300x300.png",
  "https://placehold.jp/23904d/ffffff/300x300.png",
  "https://placehold.jp/404244/ffffff/300x300.png",
];

export const SponsorRoll: FC = () => {
  return (
    <div className={styles.container}>
      {mockImage.map((image) => {
        return <img className={styles.image} key={image} src={image}></img>;
      })}
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    background-color: rgb(0, 0, 0, 0.2);
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;
  `,
};
