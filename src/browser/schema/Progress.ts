import { object, union, literal, number, type Output } from "valibot";

export const ProgressSchema = object({
  room: union([
    literal("trackOne"),
    literal("trackTwo"),
    literal("trackThree"),
  ]),
  index: number(),
});

export type Progress = Output<typeof ProgressSchema>;
