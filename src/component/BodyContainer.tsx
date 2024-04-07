"use client";

import styled from "@emotion/styled";

const BodyContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Wrap>{children}</Wrap>;
};

export default BodyContainer;

const Wrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 57px);
  background-color: ${({ theme }) => theme.color.defaultBackground};
`;
