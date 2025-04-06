import { object, union, literal, number, type InferOutput } from "valibot";

export const ProgressSchema = object({
  room: union([
    literal("trackOne"),
    literal("trackTwo"),
    literal("trackThree"),
  ]),
  index: number(),
});

export type Progress = InferOutput<typeof ProgressSchema>;
