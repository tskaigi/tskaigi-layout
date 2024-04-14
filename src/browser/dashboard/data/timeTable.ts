import { type TimeTable } from "../../schema/TimeTable";

export const timeTable = {
  trackOne: [
    {
      speakerName: "foobar",
      title: "hogefuga",
    },
  ],
  trackTwo: [],
  trackThree: [],
} as const satisfies TimeTable;
