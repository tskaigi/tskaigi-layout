export type Progress = "standby" | "during";

type CheckList = {
  [K in Progress]: string[];
};

/**
 * チェックリストの項目
 */
export const checkListItems = {
  /** 講演開始前チェックリスト */
  standby: [
    "登壇者が会場に到着した",
    "登壇者に注意事項を説明した",
    "登壇資料が読み込めている",
    "マイクチェックが完了した",
  ],
  /** 講演終了後チェックリスト */
  during: [
    "配信が待機画面に切り替わっている",
    "次の登壇者が顔出しNGかどうか確認を行った",
    "次の登壇者情報に切り替えを行った",
  ],
} as const satisfies CheckList;
