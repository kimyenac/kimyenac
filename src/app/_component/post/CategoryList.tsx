import styled from "@emotion/styled";

const CategoryList = ({
  setSelectedCategory,
  categoryList,
  category,
}: {
  categoryList: string[];
  category?: string;
  setSelectedCategory: (category: string) => void;
}) => {
  return (
    <Wrap>
      {categoryList.map((item) => (
        <Chip
          key={item}
          isSelected={category === item}
          onClick={() => setSelectedCategory(item)}
        >
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

const Chip = styled.button<{ isSelected: boolean }>`
  padding: 6px 10px;
  font-size: 12px;
  line-height: 120%;
  border: ${({ theme }) => `1px solid ${theme.color.defaultText}`};
  border-radius: 12px;
  cursor: pointer;

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.defaultBackground : theme.color.defaultText};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.defaultText : theme.color.defaultBackground};
`;
