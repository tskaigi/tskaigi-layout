type CheckList = {
  pre: string[];
  post: string[];
};

/**
 * チェックリストの項目
 */
export const checkListItems = {
  /** 講演開始前チェックリスト */
  pre: [],
  /** 講演終了後チェックリスト */
  post: [],
} as const satisfies CheckList;
