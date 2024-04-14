import { useCallback, useEffect, useMemo, useState } from "react";
import { BaseSchema, safeParse, type AnySchema } from "valibot";

/**
 * 汎用Replicant呼び出し用Hooks
 */
export const useReplicant = <T extends {}>(
  name: string,
  schema: BaseSchema,
) => {
  const replicant = useMemo(() => nodecg.Replicant(name), [name]);
  const [value, update] = useState<T | undefined>(undefined);

  const setValue = useCallback(
    (nextState: T) => {
      update(nextState);
      replicant.value = nextState;
    },
    [update],
  );

  const changeHandler = useCallback(
    (nextValue: unknown) => {
      const result = safeParse<BaseSchema<T>>(schema, nextValue);

      if (result.success) {
        update(result.output);
      }
    },
    [schema],
  );

  useEffect(() => {
    replicant.addListener("change", changeHandler);

    return () => replicant.removeListener("change", changeHandler);
  }, [replicant, changeHandler]);

  return {
    value,
    setValue,
  };
};
