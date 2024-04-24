"use client";

import styled from "@emotion/styled";
import { useEffect } from "react";
import useThemeMode from "@/hook/useThemeMode";
import { darkTheme, lightTheme } from "@/constant/theme";

const BodyContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isDarkMode } = useThemeMode();

  useEffect(() => {
    document.body.style.background = isDarkMode
      ? darkTheme.color.defaultBackground
      : lightTheme.color.defaultBackground;
  }, [isDarkMode]);

  return <Wrap>{children}</Wrap>;
};

export default BodyContainer;

const Wrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 57px);
  background-color: ${({ theme }) => theme.color.defaultBackground};
`;
