import { atom } from "recoil";
import { ThemeMode } from "@/type";

export const themeModeStore = atom<keyof typeof ThemeMode>({
  default: "DARK",
  key: "theme-mode-store-key",
});
