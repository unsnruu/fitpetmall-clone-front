import styled from "@emotion/styled";

const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 2px;
  border-radius: 1rem; ;
`;
const NavButton = styled.span<{ selected: boolean }>`
  font-size: 14px;
  padding: 2px 13px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.blue : theme.color.gray};
  border-radius: 1rem;
  color: ${({ theme, selected }) =>
    selected ? `white` : theme.color.deepGray};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CategoryNavProps {
  visible: number;
  setVisible: React.Dispatch<React.SetStateAction<number>>;
}

export default function CategoryNav({ visible, setVisible }: CategoryNavProps) {
  const titles = ["사료", "간식", "용품", "건강관리"];

  const createClickHandler = (idx: number) => () => {
    setVisible(idx);
  };
  return (
    <NavContainer>
      {titles.map((title, idx) => (
        <NavButton
          key={idx}
          selected={visible === idx}
          onClick={createClickHandler(idx)}
        >
          {title}
        </NavButton>
      ))}
    </NavContainer>
  );
}
