import { Output, literal, object, union } from "valibot";

export const LayoutSchema = object({
  type: union([literal("default"), literal("translation")]),
});

export type Layout = Output<typeof LayoutSchema>;
