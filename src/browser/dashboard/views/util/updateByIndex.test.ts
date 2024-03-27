import { describe, test, expect } from "vitest";

import { updateByIndex } from "./updateByIndex";

describe("配列内から任意のindexを指定してその要素を更新して返却する関数", () => {
  test("更新が正しく行えること", () => {
    const result = updateByIndex([1, 2, 3, 4, 5], 2, 10);

    expect(result).toStrictEqual([1, 2, 10, 4, 5]);
  });
});
