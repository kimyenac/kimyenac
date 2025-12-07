import { useEffect } from "react";
import { StorageKey, ThemeMode } from "@/type";
import { useAtom } from "jotai";
import { themeModeStore } from "@/store/themeModeStore";

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useAtom(themeModeStore);

  useEffect(() => {
    const storageThemeMode: ThemeMode =
      (window.localStorage.getItem(StorageKey.THEME_MODE) as ThemeMode) ??
      ThemeMode.DARK;

    if (!storageThemeMode) {
      setThemeMode(ThemeMode.DARK);
      window.localStorage.setItem(StorageKey.THEME_MODE, ThemeMode.DARK);
    } else {
      setThemeMode(storageThemeMode);
    }
  }, [setThemeMode]);

  useEffect(() => {
    window.localStorage.setItem(
      StorageKey.THEME_MODE,
      themeMode === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT,
    );
  }, [themeMode]);

  return {
    isDarkMode: themeMode === ThemeMode.DARK,
    changeThemeMode: (isDarkMode: boolean) =>
      setThemeMode(isDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT),
  };
};

export default useThemeMode;
