import type { DefaultColors } from "tailwindcss/types/generated/colors";

type Luminance = keyof DefaultColors["blue"];

type CustomColorsKeys =
  | "green-100"
  | "green-200"
  | "white-100"
  | "white-200"
  | "white-300"
  | "error"
  | "warning"
  | "success";

// TODO: figure out how to get these from tailwind config so this doesn't have to be manually updated with new colors

type ColorsWithLuminance = keyof Omit<DefaultColors, CustomColorsKeys>;

type CombinedColors = `${ColorsWithLuminance}-${Luminance}`;

type Colors = CombinedColors | CustomColorsKeys;

type TextColor = `text-${Colors}`;

export { type TextColor };
