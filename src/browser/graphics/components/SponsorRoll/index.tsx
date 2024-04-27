import type { FC } from "react";
import { useEffect, useState } from "react";

import { css } from "@emotion/css";

type Props = {
  title: string;
  intervalTime?: number;
  images: string[];
};

export const SponsorRoll: FC<Props> = ({
  title,
  intervalTime = 10000,
  images,
}) => {
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
    <>
      <span className={styles.title}>{title}</span>
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
    </>
  );
};

const styles = {
  container: css`
    position: relative;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-weight: bolder;
    text-align: center;
    color: #fff;
  `,
  image: css`
    position: absolute;
    height: inherit;
    min-width: 240px;
    border-radius: 8px;
    overflow: hidden;
    transition: opacity 500ms ease-in-out;

    &[hidden] {
      display: block;
      opacity: 0;
    }
  `,
};
