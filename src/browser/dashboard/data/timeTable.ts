import { type TimeTable } from "../../schema/TimeTable";

export const timeTable = {
  trackOne: [
    {
      speakerName: "foobar",
      title: "hogefuga",
    },
    {
      speakerName: "fooooo",
      title: "aaaaa",
    },
  ],
  trackTwo: [],
  trackThree: [],
} as const satisfies TimeTable;
