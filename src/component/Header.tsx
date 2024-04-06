"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { css } from "@emotion/react";

const Header = () => {
  const [checked, setChecked] = useState(false);

  // todo 테마 변경 로직 추가
  const onChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Wrap>
      <Container>
        <Name href="/">kimyenac</Name>
        <input
          id="toggle"
          type="checkbox"
          checked={checked}
          onClick={onChange}
          hidden
        />

        <ToggleSwitch checked={checked} htmlFor="toggle">
          <ToggleButton checked={checked} />
        </ToggleSwitch>
      </Container>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  background-color: #eee;
  z-index: 1;
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
  color: #000;
  font-size: 16px;
  text-decoration: none;
  line-height: 120%;
`;

const ToggleSwitch = styled.label<{ checked: boolean }>`
  width: 50px;
  height: 25px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  transition: all 0.2s ease-in;

  ${({ checked }) =>
    checked &&
    css`
      background: #f03d3d;
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
  background: #f03d3d;
  transition: all 0.2s ease-in;

  ${({ checked }) =>
    checked &&
    css`
      left: calc(100% - 22px);
      background: #fff;
    `}
`;
