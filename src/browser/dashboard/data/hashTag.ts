import { TimeTable } from "../../schema/TimeTable";

type Tracks = keyof TimeTable;
type HashTag = {
  global: string;
  scoped: Record<Tracks, string>;
};

export const hashTag = {
  global: "TSKaigi2024",
  scoped: {
    trackOne: "TSKaigi1",
    trackTwo: "TSKaigi2",
    trackThree: "TSKaigi3",
  },
} as const satisfies HashTag;
