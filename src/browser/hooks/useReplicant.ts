import { useCallback, useEffect, useMemo, useState } from "react";
import { BaseIssue, BaseSchema, safeParse } from "valibot";

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

/**
 * 汎用Replicant呼び出し用Hooks
 */
export const useReplicant = <T extends {}>(
  name: string,
  schema: BaseSchema<unknown, T, BaseIssue<unknown>>,
  initialize?: T,
) => {
  const replicant = useMemo(() => nodecg.Replicant(name), [name]);
  const [value, update] = useState<T | undefined>(initialize);

  const setValue = useCallback(
    (nextState: T) => {
      update(nextState);
      replicant.value = nextState;
    },
    [replicant],
  );

  const changeHandler = useCallback(
    (nextValue: unknown) => {
      const result = safeParse<BaseSchema<unknown, T, BaseIssue<unknown>>>(
        schema,
        nextValue,
      );

      if (result.success) {
        update(result.output);
      }
    },
    [schema],
  );

  const reset = useCallback(() => {
    update(initialize);
    replicant.value = initialize;
  }, [initialize, replicant]);

  useEffect(() => {
    replicant.addListener("change", changeHandler);

    return () => replicant.removeListener("change", changeHandler);
  }, [replicant, changeHandler]);

  return {
    value,
    setValue,
    reset,
  };
};
