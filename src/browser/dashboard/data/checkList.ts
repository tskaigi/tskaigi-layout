export type Progress = "standby" | "during";

type CheckList = {
  [K in Progress]: string[];
};

/**
 * チェックリストの項目
 */
export const checkListItems = {
  /** 講演開始前チェックリスト */
  standby: [],
  /** 講演終了後チェックリスト */
  during: [],
} as const satisfies CheckList;
