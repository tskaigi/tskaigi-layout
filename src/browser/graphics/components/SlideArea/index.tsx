import type { FC } from "react";

import { CoPresent } from "@mui/icons-material";
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
      {subtitling && <div className={styles.subtitle} />}
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
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 16 / 9;
    background-color: rgb(0, 0, 0, 0.2);

    ${hasSubtitle ? { height: "100%" } : { width: "100%" }}
  `,

  subtitle: css`
    height: 160px;
    background-color: rgb(0, 0, 0, 0.2);
  `,
};
