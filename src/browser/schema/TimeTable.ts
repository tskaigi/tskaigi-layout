import { object, string, array, type Output } from "valibot";

export const TrackItemSchema = object({
  speakerName: string(),
  title: string(),
});

export const TimeTableSchema = object({
  trackOne: array(TrackItemSchema),
  trackTwo: array(TrackItemSchema),
  trackThree: array(TrackItemSchema),
});

export type TimeTable = Output<typeof TimeTableSchema>;
