"use client";

import styled from "@emotion/styled";

const SimpleInfo = ({ description }: { description: string }) => {
  return (
    <Wrap>
      <Profile src="/profile.png" />
      <InfoWrap>
        <Name>kimyenac</Name>
        <Description>{description}</Description>
      </InfoWrap>
    </Wrap>
  );
};

export default SimpleInfo;

const Wrap = styled.div`
  padding: 2.5rem 1rem 0 1rem;
  margin: auto;
  max-width: 800px;
  display: flex;
  gap: 12px;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25% 0 25% 0;
`;

const InfoWrap = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  color: ${({ theme }) => theme.color.defaultText};
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.defaultText};
`;
