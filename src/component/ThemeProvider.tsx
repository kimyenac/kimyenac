"use client";

import { ReactNode, useEffect, useState } from "react";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@/constant/theme";
import useThemeMode from "@/hook/useThemeMode";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useThemeMode();
  const [themePreset, setThemePreset] = useState(
    isDarkMode ? darkTheme : lightTheme,
  );

  useEffect(() => {
    setThemePreset(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  return (
    <EmotionThemeProvider theme={themePreset}>{children}</EmotionThemeProvider>
  );
};

export default ThemeProvider;
