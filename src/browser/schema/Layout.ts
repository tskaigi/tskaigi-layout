import { type InferOutput, literal, object, string, union } from "valibot";

export const LayoutSchema = union([
  object({
    type: literal("default"),
  }),
  object({
    type: literal("translation"),
    frame: string(),
  }),
]);

export type Layout = InferOutput<typeof LayoutSchema>;
