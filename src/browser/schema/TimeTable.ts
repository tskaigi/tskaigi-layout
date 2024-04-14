import * as v from "valibot";

export const TrackItemSchema = v.object({
  speakerName: v.string(),
  title: v.string(),
});

export const TimeTableSchema = v.object({
  trackOne: v.array(TrackItemSchema),
  trackTwo: v.array(TrackItemSchema),
  trackThree: v.array(TrackItemSchema),
});

export type TimeTable = v.Input<typeof TimeTableSchema>;
