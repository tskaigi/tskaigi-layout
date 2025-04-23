import NodeCG from "@nodecg/types";
import { useEffect, useState } from "react";

type AssetName = "platinum-sponsors" | "gold-sponsors";

export const useNodecgAssets = (name: AssetName): NodeCG.AssetFile[] => {
  const [value, update] = useState<NodeCG.AssetFile[]>([]);

  useEffect(() => {
    const assetsRep = nodecg.Replicant<NodeCG.AssetFile[]>(`assets:${name}`);
    const changeHandler = (nextValue: NodeCG.AssetFile[] | undefined) => {
      if (nextValue) {
        update([...nextValue]);
      }
    };
    assetsRep.on("change", changeHandler);
    return () => assetsRep.off("change", changeHandler);
  }, [name]);

  return value;
};

export const usePlatinumSponsors = () => useNodecgAssets("platinum-sponsors");
export const useGoldSponsorts = () => useNodecgAssets("gold-sponsors");
