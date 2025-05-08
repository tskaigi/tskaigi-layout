import { useEffect, useState, type FC } from "react";
import { css } from "@emotion/css";

import goldfish from "./goldfish.svg?inline";

type Props = {
  gold: string[];
  platinum: string[];
  intervalTime?: number;
  areaName?: string;
};

export const SponsorArea: FC<Props> = ({
  gold,
  platinum,
  intervalTime = 10_000,
  areaName = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const groupSize = Math.ceil(gold.length / 2);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= groupSize ? 0 : next;
      });
    }, intervalTime);

    return () => clearInterval(id);
  });

  return (
    <div style={{ gridArea: areaName }} className={styles.container}>
      <img src={goldfish} className={styles.goldfish} alt="" />
      <div className={styles.plan}>
        <h3 className={styles.title}>PLATINUM SPONSORS</h3>
        <ul className={styles.list}>
          {platinum.map((image) => {
            return (
              <li key={image} className={styles.item}>
                <img className={styles.logo} src={image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.plan}>
        <h3 className={styles.title}>GOLD SPONSORS</h3>
        <ul className={styles.grid}>
          {gold.map((image, index) => {
            return (
              <li
                key={image}
                className={styles.cell}
                data-position={index % 2 === 0 ? "odd" : "even"}
                hidden={Math.floor(index / 2) !== currentIndex}
              >
                <img className={styles.logo} src={image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    width: 100%;
    min-width: 350px;
    height: auto;
    max-height: 100vh;
    margin: 13px 0 0 0;
    padding: 3px 0 16px 0;
    background-color: rgba(255, 255, 255, 1);
    opacity: 0.9;
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
    border-radius: 5px;
  `,
  goldfish: css`
    position: absolute;
    right: -5px;
    top: -13px;
    width: max(55px, 15%);
  `,
  title: css`
    margin: 0;
    padding: 16px 0 14px 0;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(0, 0, 0, 1);
  `,
  plan: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  list: css`
    display: flex;
    flex-direction: column;
    height: 340px;
    gap: 14px;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `,
  item: css`
    flex: 1;
    min-height: 0;
  `,
  grid: css`
    margin: 0 30px;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    list-style-type: none;
    height: 46px;
  `,
  cell: css`
    min-height: 0;
  `,
  logo: css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  `,
};
