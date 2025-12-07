import { atom } from "jotai";
import { ThemeMode } from "@/type";

export const themeModeStore = atom<keyof typeof ThemeMode>("DARK");
