"use client";

import styled from "@emotion/styled";

const SideProject = () => {
  return (
    <Wrap>
      <Container>
        <Title>직장 근처 맛집 추천 서비스 ‘EatGPT’ 출시</Title>
        <DescriptionUl>
          <DescriptionLi>
            프론트엔드 개발자 2명, 백엔드 개발자 3명으로 총 5명으로 진행된 팀
            프로젝트
          </DescriptionLi>
          <DescriptionLi>
            프로젝트 매니징, 디자인, 프론트엔드 개발 담당
          </DescriptionLi>
          <DescriptionLi>nextJS 사용 & 서비스 운영 경험</DescriptionLi>
          <DescriptionLi>next13, emotion, recoil, Github</DescriptionLi>
        </DescriptionUl>
      </Container>
    </Wrap>
  );
};

export default SideProject;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.color.defaultBackground};
  line-height: 120%;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const DescriptionUl = styled.ul`
  margin: 0;
  padding: 0 0 0 15px;
  font-size: 13px;
`;

const DescriptionLi = styled.li``;
