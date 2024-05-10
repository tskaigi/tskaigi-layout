import type { FC } from "react";
import { useEffect, useState } from "react";
import groupBy from "object.groupby";

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

  const items = groupBy(images, (_, i) => (i % 2 === 0 ? "odd" : "even"));

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev + 1 === items.odd?.length ? 0 : prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(id);
  });

  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className={styles.container}>
        <div className={styles.layout}>
          {items.odd?.map((image, index) => {
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
        <div className={styles.layout}>
          {items.even?.map((image, index) => {
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
      </div>
    </>
  );
};

const styles = {
  container: css`
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `,
  title: css`
    font-weight: bolder;
    text-align: center;
    color: #fff;
    letter-spacing: 0.05em;
    padding-top: 8px;
  `,
  layout: css`
    position: relative;
    width: 50%;
    height: inherit;
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    width: 100%;
    height: auto;
    border-radius: 8px;
    overflow: hidden;
    transition: opacity 500ms ease-in-out;

    &[hidden] {
      display: block;
      opacity: 0;
    }
  `,
};
