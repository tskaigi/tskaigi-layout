type HEX = `#${string}`;
type Color = Record<string, HEX>;

/**
 * Typescriptのブランドカラー
 *
 * @ref https://www.typescriptlang.org/branding/
 */
export const typescript = {
  main: "#3178C6",
  secondaryLight: "#358FE1",
  secondaryMedium: "#235A97",
  secondaryDark: "#00273F",
  highlight: "#F1DD35",
  highlightDark: "#C6BF31",
  primaryBackground: "#FAF9F8",
} as const satisfies Color;
