import type { FC } from "react";

import { css } from "@emotion/css";

type Props = {
  title: string;
  images: string[];
};

export const SponsorStatic: FC<Props> = ({ title, images }) => {
  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className={styles.container}>
        {images.map((image) => {
          return (
            <div key={image} className={styles.item}>
              <img className={styles.image} src={image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `,
  title: css`
    font-weight: bolder;
    text-align: center;
    color: #fff;
    letter-spacing: 0.05em;
    padding-top: 8px;
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
