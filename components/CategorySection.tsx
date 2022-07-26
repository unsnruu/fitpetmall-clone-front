import React, { useState } from "react";
import styled from "@emotion/styled";

import CategoryArticle from "./CategoryArticle";

import puppyIcon from "../public/icons/ic_dog_퍼피.svg";
import adultIcon from "../public/icons/ic_dog_어덜트.svg";
import seniorIcon from "../public/icons/ic_dog_시니어.svg";
import dryIcon from "../public/icons/ic_dog_건식.svg";
import softIcon from "../public/icons/ic_dog_소프트.svg";
import wetIcon from "../public/icons/ic_dog_화식.svg";
import freezedIcon from "../public/icons/ic_dog_동결건조.svg";
import moreIcon from "../public/icons/ic_plus.svg";

const Container = styled.div`
  height: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArticleContainer = styled.div<{ visible: number }>`
  width: 100%;
  transform: ${({ visible }) => `translateX(-${visible * 100}%)`};
  transition: transform 0.1s linear;
`;
export interface IconType {
  title: string;
  imgSrc: string;
}
const feed: IconType[] = [
  { title: "퍼피(~1세)", imgSrc: puppyIcon },
  { title: "어덜트(1~7세)", imgSrc: adultIcon },
  { title: "시니어(7세~)", imgSrc: seniorIcon },
  { title: "건식", imgSrc: dryIcon },
  { title: "소프트", imgSrc: softIcon },
  { title: "습식/화식", imgSrc: wetIcon },
  { title: "동결/건조", imgSrc: freezedIcon },
  { title: "전체보기", imgSrc: moreIcon },
];

const icons = {
  feed,
  dessert: {},
  supplies: {},
  health: {},
};

function CategorySection() {
  const [visible, setVisible] = useState(0);

  return (
    <Container>
      <CategoryNav visible={visible} setVisible={setVisible} />
      <ArticleContainer visible={visible}>
        <CategoryArticle icons={icons.feed} />
      </ArticleContainer>
    </Container>
  );
}

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
function CategoryNav({ visible, setVisible }: CategoryNavProps) {
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

export default CategorySection;
