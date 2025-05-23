import {
  object,
  string,
  array,
  optional,
  type InferOutput,
  boolean,
} from "valibot";

export const TrackItemSchema = object({
  speakerName: string(),
  title: string(),
  doNotShowFace: optional(boolean()),
  social: object({
    github: string(),
    link: string(),
    twitter: string(),
  }),
});
export type TrackItem = InferOutput<typeof TrackItemSchema>;

export const TimeTableSchema = object({
  trackOne: array(TrackItemSchema),
  trackTwo: array(TrackItemSchema),
  trackThree: array(TrackItemSchema),
});

export type TimeTable = InferOutput<typeof TimeTableSchema>;
