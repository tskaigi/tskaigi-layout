import type { FC } from "react";

import { CoPresent, Translate } from "@mui/icons-material";
import { css } from "@emotion/css";

type Props = {
  /** 字幕表示エリアを確保するか */
  subtitling?: boolean;
};

export const SlideArea: FC<Props> = ({ subtitling = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.slideWrapper}>
        <div className={styles.slide(subtitling)}>
          <CoPresent sx={{ fontSize: 80, opacity: 0.5 }} />
        </div>
      </div>
      {subtitling && (
        <div className={styles.subtitle}>
          <Translate sx={{ fontSize: 40, opacity: 0.5 }} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
  `,

  slideWrapper: css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,

  slide: (hasSubtitle: boolean) => css`
    box-sizing: border-box;
    display: flex;
    padding: 32px;
    aspect-ratio: 16 / 9;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgb(0, 0, 0, 0.2);

    ${hasSubtitle ? { height: "100%" } : { width: "100%" }}
  `,

  subtitle: css`
    box-sizing: border-box;
    height: 160px;
    padding: 16px;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgb(0, 0, 0, 0.2);
  `,
};
