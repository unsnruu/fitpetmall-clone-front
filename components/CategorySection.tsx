import React, { useState } from "react";
import styled from "@emotion/styled";
import type { GetServerSideProps } from "next";

import CategorySlide from "./CategorySlide";
import CategoryNav from "./CategoryNav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 17rem; ;
`;
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
  overflow: hidden;
  cursor: grab;
`;
export interface IconType {
  title: string;
  imgSrc: string;
}
export interface IconData {
  name: string;
  id: string;
  path: string;
}
export interface CategorySectionProps {
  icons: {
    feed: IconData[];
    dessert: IconData[];
    tool: IconData[];
    health: IconData[];
  };
}

function CategorySection({ icons }: CategorySectionProps) {
  const [visible, setVisible] = useState(1);
  const [pressed, setPressed] = useState(false);

  return (
    <Container>
      <CategoryNav visible={Math.round(visible)} setVisible={setVisible} />
      <SlideContainer
        onPointerDown={() => {
          setPressed(true);
        }}
        onPointerMove={(e) => {
          if (!pressed) return;
          setVisible((prev) => {
            if (prev >= 0 && prev <= 3) return prev + e.movementX / 300;
            else if (prev < 0) return 0;
            else if (prev > 3) return 3;
            else return prev;
          });
        }}
        onPointerUp={() => {
          setPressed(false);
        }}
      >
        <CategorySlide icon={icons.feed} visible={visible} index={0} />
        <CategorySlide icon={icons.dessert} visible={visible} index={1} />
        <CategorySlide icon={icons.tool} visible={visible} index={2} />
        <CategorySlide icon={icons.health} visible={visible} index={3} />
      </SlideContainer>
    </Container>
  );
}

export default CategorySection;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/icons`);
  const { data } = await res.json();
  console.log("abc", data);
  return { props: { data } };
};
