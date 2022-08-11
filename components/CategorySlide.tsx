import styled from "@emotion/styled";
import Image from "next/image";

import type { IconData } from "./CategorySection";
//todo : gap 설정을 media-query에 따라서 설정하기
const Container = styled.div`
  display: grid;
  align-items: center;
  margin: 0 63px;
  height: 200px;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 576px) {
    gap: 0;
  }
`;
interface CategoryArticleProps {
  icon: IconData[];
}

export default function CategorySlide({ icon }: CategoryArticleProps) {
  return (
    <Container>
      {icon.map(({ id, name, path }) => {
        return <IconItem key={id} id={id} path={path} name={name}></IconItem>;
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

interface IconItemProps extends IconData {
  size?: "default" | "small";
}
function IconItem({ name, path }: IconItemProps) {
  // if (size === "small") {
  //   return (
  //     <ItemContainer>
  //       <div
  //         style={{
  //           width: 60,
  //           height: 60,
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <Image
  //           src={imgSrc}
  //           layout="fixed"
  //           alt={title + "icon"}
  //           width="32"
  //           height="32"
  //         />
  //       </div>
  //       <Title>{title}</Title>
  //     </ItemContainer>
  //   );
  // }

  return (
    <ItemContainer>
      <Image
        src={path}
        layout="fixed"
        alt={name + "icon"}
        width="60"
        height="60"
      />
      <Title>{name}</Title>
    </ItemContainer>
  );
}
