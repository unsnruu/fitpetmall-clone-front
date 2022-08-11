import styled from "@emotion/styled";
import Image from "next/image";

import type { IconData } from "./CategorySection";

const Container = styled.div<{ visible: number; index: number }>`
  display: grid;
  height: 200px;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  position: absolute;
  width: 100%;
  /* border: 1px solid red; */
  padding: 0 36px;
  transform: ${({ index, visible }) =>
    `translateX(${(index - visible) * 100}%)`};
  transition: transform 200ms;
  @media (max-width: 576px) {
    gap: 0;
  }
`;
interface CategoryArticleProps {
  icon: IconData[];
  visible: number;
  index: number;
}

export default function CategorySlide({
  icon,
  visible,
  index,
}: CategoryArticleProps) {
  return (
    <Container visible={visible} index={index}>
      {icon.map(({ id, name, path }) => {
        return <IconItem key={id} id={id} path={path} name={name}></IconItem>;
      })}
    </Container>
  );
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const ItemContainer = styled.div`
  width: 86px;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
const Title = styled.div`
  color: ${({ theme }) => theme.color.deepGray};
  font-size: 14px;
  font-weight: 600;
  word-break: break-all;
`;

interface IconItemProps extends IconData {
  size?: "default" | "small";
}
function IconItem({ name, path }: IconItemProps) {
  return (
    <ItemContainer>
      <Image
        src={path}
        layout="fixed"
        alt={name + "icon"}
        width="60"
        height="60"
        draggable="false"
      />
      <Title>{name}</Title>
    </ItemContainer>
  );
}
