"use client";

import styled from "@emotion/styled";
import Category from "@/app/_component/Category";
import React from "react";

type Props = {
  category: string;
  title: string;
  description: string;
  children: React.JSX.Element;
};

// todo 컨테이너 사용 데이터가 많아지면 구조 변경 필요
const Container = ({ category, title, description, children }: Props) => {
  return (
    <Wrap>
      <Category title={category} />
      <MainWrap>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Horizontal />
        {children}
      </MainWrap>
    </Wrap>
  );
};

export default Container;

const Wrap = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: ${({ theme }) => `1.5px solid ${theme.color.defaultGrayColor}`};
`;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  color: ${({ theme }) => theme.color.defaultBackground};
  line-height: 120%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.defaultText};
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 14px;
`;

const Horizontal = styled.div`
  margin: 4px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.defaultBackground};
`;
