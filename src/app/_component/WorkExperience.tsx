"use client";

import styled from "@emotion/styled";

const WorkExperience = () => {
  return (
    <Wrap>
      <Container>
        <Title>
          2024 - 자신의 디자인으로 상품을 판매하는 서비스 ‘미캔샵’ 출시
        </Title>
        <DescriptionUl>
          <DescriptionLi>
            사내 2024 대표 OKR 프로젝트 | 프론트엔드 담당
          </DescriptionLi>
          <DescriptionLi>
            디자인허브 기여자가 본인이 작업한 디자인을 업로드할 수 있게
            미리캔버스 연결
          </DescriptionLi>
          <DescriptionLi>
            샵 관리 및 등록, 상품 등록/관리를 하기 위한 UI UX 작업
          </DescriptionLi>
          <DescriptionLi>
            상품을 구매할 수 있는 ‘미캔샵’ 서비스 구현 및 출시
          </DescriptionLi>
          <DescriptionLi>
            next14, react-i18next, i18next, Github, Github-actions
          </DescriptionLi>
        </DescriptionUl>
      </Container>
      <Container>
        <Title>2023 - 인쇄물제작 플랫폼 ‘비즈하우스’ 서비스 글로벌화</Title>
        <DescriptionUl>
          <DescriptionLi>
            사내 2023 대표 OKR 프로젝트 | 프론트엔드 담당
          </DescriptionLi>
          <DescriptionLi>MSA 결제 서비스 연결</DescriptionLi>
          <DescriptionLi>기존 코리아 서비스와 다른 UI & UX 작업</DescriptionLi>
          <DescriptionLi>
            react-i18next, i18next, reactJS, JSP (레거시 페이지), BitBucket,
            Bamboo
          </DescriptionLi>
        </DescriptionUl>
      </Container>
    </Wrap>
  );
};

export default WorkExperience;

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
