import type { FC } from "react";
import { useEffect, useState } from "react";

import { css } from "@emotion/css";

type Props = {
  intervalTime?: number;
  images: string[];
};

export const SponsorRoll: FC<Props> = ({ intervalTime = 5000, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev + 1 === images.length ? 0 : prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(id);
  });

  return (
    <div className={styles.container}>
      {images.map((image, index) => {
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
    background-color: rgb(255, 255, 255);
  `,
  image: css`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: auto;
    margin: auto;
    display: block;
    opacity: 1;
    transform: translateY(-50%);
    padding: 8px;
    transition: opacity 500ms ease-in-out;

    &[hidden] {
      display: block;
      opacity: 0;
    }
  `,
};
