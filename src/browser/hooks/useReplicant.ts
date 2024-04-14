import { useCallback, useEffect, useMemo, useState } from "react";
import { safeParse, type BaseSchema } from "valibot";

export const useReplicant = <T extends BaseSchema>(name: string, schema: T) => {
  const replicant = useMemo(() => nodecg.Replicant(name), [name]);
  const [value, update] = useState<T | undefined>(undefined);

  const changeHandler = useCallback(
    (nextValue: unknown) => {
      const result = safeParse(schema, nextValue);

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
  };
};
