import styled from "@emotion/styled";

const CategoryList = ({
  setSelectedCategory,
  categoryList,
}: {
  categoryList: string[];
  setSelectedCategory: (category: string) => void;
}) => {
  return (
    <Wrap>
      {categoryList.map((item) => (
        <Chip key={item} onClick={() => setSelectedCategory(item)}>
          {item}
        </Chip>
      ))}
    </Wrap>
  );
};

export default CategoryList;

const Wrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Chip = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.defaultText};
  line-height: 120%;
  border: ${({ theme }) => `1px solid ${theme.color.defaultText}`};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.defaultBackground};
  cursor: pointer;
`;
