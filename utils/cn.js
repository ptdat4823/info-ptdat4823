import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args) {
  return clsx(twMerge(...args));
}
