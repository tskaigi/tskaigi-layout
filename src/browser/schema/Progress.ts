import * as v from "valibot";

export const ProgressSchema = v.object({
  room: v.union([
    v.literal("trackOne"),
    v.literal("trackTwo"),
    v.literal("trackThree"),
  ]),
  index: v.number(),
});

export type Progress = v.Input<typeof ProgressSchema>;
