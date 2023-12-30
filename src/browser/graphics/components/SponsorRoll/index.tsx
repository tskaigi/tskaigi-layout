import type { FC } from "react";
import { useEffect, useState } from "react";

import { css } from "@emotion/css";

const mockImage = [
  "https://placehold.jp/3d4070/ffffff/300x300.png",
  "https://placehold.jp/23904d/ffffff/300x300.png",
  "https://placehold.jp/404244/ffffff/300x300.png",
];

type Props = {
  intervalTime?: number;
};

export const SponsorRoll: FC<Props> = ({ intervalTime = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev + 1 === mockImage.length ? 0 : prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(id);
  });

  return (
    <div className={styles.container}>
      {mockImage.map((image, index) => {
        return (
          <img
            key={image}
            className={styles.image}
            src={image}
            hidden={currentIndex !== index}
          ></img>
        );
      })}
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1/1;
    background-color: rgb(0, 0, 0, 0.2);
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    opacity: 1;
    transition: opacity 500ms ease-in-out;

    &[hidden] {
      display: block;
      opacity: 0;
    }
  `,
};
