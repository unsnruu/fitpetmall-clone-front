import styled from "@emotion/styled";
import Image from "next/image";

import { IconType } from "./CategorySection";

const Container = styled.div`
  display: grid;
  align-items: center;
  margin: 0 63px;
  height: 200px;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
interface CategoryArticleProps {
  icons: IconType[];
}

export default function CategoryArticle({ icons }: CategoryArticleProps) {
  return (
    <Container>
      {icons.map(({ imgSrc, title }, idx) => {
        return (
          <IconItem
            key={idx}
            imgSrc={imgSrc}
            title={title}
            size={idx !== icons.length - 1 ? "default" : "small"}
          ></IconItem>
        );
      })}
    </Container>
  );
}

const ItemContainer = styled.div`
  width: 86px;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: ${({ theme }) => theme.color.deepGray};
  font-size: 14px;
  font-weight: 600;
  word-break: break-all;
`;

interface IconItemProps extends IconType {
  size: "default" | "small";
}
function IconItem({ imgSrc, title, size }: IconItemProps) {
  if (size === "small") {
    return (
      <ItemContainer>
        <div
          style={{
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={imgSrc}
            layout="fixed"
            alt={title + "icon"}
            width="32"
            height="32"
          />
        </div>
        <Title>{title}</Title>
      </ItemContainer>
    );
  }

  return (
    <ItemContainer>
      <Image
        src={imgSrc}
        layout="fixed"
        alt={title + "icon"}
        width="60"
        height="60"
      />
      <Title>{title}</Title>
    </ItemContainer>
  );
}
