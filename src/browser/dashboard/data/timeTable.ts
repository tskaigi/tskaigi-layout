type Tracks = "trackOne" | "trackTwo" | "trackThree";

export type TimeTable = {
  [K in Tracks]: {
    title: string;
    speakerName: string;
  }[];
};

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
