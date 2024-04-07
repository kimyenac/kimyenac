"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/react";
import useThemeMode from "@/hook/useThemeMode";

const Header = () => {
  const { isDarkMode, changeThemeMode } = useThemeMode();

  return (
    <Wrap>
      <Container>
        <Name href="/">kimyenac</Name>
        <input
          id="toggle"
          type="checkbox"
          checked={isDarkMode}
          onClick={() => {
            changeThemeMode(!isDarkMode);
          }}
          hidden
        />

        <ToggleSwitch checked={isDarkMode} htmlFor="toggle">
          <ToggleButton checked={isDarkMode} />
        </ToggleSwitch>
      </Container>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.defaultHorizontal};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Name = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  line-height: 120%;
  color: ${({ theme }) => theme.color.defaultBlack};
`;

const ToggleSwitch = styled.label<{ checked: boolean }>`
  width: 50px;
  height: 25px;
  display: block;
  position: relative;
  border-radius: 30px;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  transition: all 0.2s ease-in;

  ${({ checked, theme }) => css`
    background-color: ${checked
      ? theme.color.rightActive
      : theme.color.darkActive};
  `}
`;

const ToggleButton = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: all 0.2s ease-in;
  background-color: ${({ theme }) => theme.color.defaultWhite};

  ${({ checked }) =>
    checked &&
    css`
      left: calc(100% - 22px);
    `}
`;
