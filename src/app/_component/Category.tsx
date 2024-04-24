import styled from "@emotion/styled";

const Category = ({ title }: { title: string }) => {
  return <Title>{title}</Title>;
};

export default Category;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.defaultText};
  line-height: 120%;
`;
