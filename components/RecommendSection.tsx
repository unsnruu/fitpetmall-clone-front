import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import type { StrapiData } from "../types";
import type { ItemAttr } from "pages/index";

import SalesItem from "./SaleItem";
import leftSlideBtnSrc from "../public/icons/leftSlideBtn_large.svg";
import rightSlideBtnSrc from "../public/icons/rightSlideBtn_large.svg";

const Container = styled.div`
  padding: 20px 0 36px;
  position: relative;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 16px;
`;
const ItemsContainer = styled.div`
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
  }
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(10, 1fr);
`;
const Button = styled.div`
  position: absolute;
  top: 50%;
  background-color: transparent;
  z-index: 99999;
  cursor: pointer;
  user-select: none;
  scroll-behavior: smooth;
`;

interface RecommendSectionProps {
  items: StrapiData<ItemAttr>[];
}

function RecommendSection({ items }: RecommendSectionProps) {
  const container = useRef<HTMLDivElement>(null);

  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(true);

  const handleClickLeft = () => {
    if (!container.current) return;
    container.current!.scrollLeft -= 300;
  };
  const handleClickRight = () => {
    if (!container.current) return;
    container.current!.scrollLeft += 300;
  };
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    if (scrollLeft === 0) {
      setVisibleLeft(false);
    }
    if (scrollLeft > 0) {
      setVisibleLeft(true);
      setVisibleRight(true);
    }
    if (scrollLeft === scrollWidth - clientWidth) {
      setVisibleRight(false);
    }
  };

  return (
    <Container>
      <Title>최근 찾던 상품과 함께 보면 좋은 상품</Title>
      {visibleLeft && (
        <Button onClick={handleClickLeft}>
          <Image
            src={leftSlideBtnSrc}
            layout="fixed"
            width="42"
            height="72"
            alt="left button"
          />
        </Button>
      )}
      {visibleRight && (
        <Button onClick={handleClickRight} style={{ right: 0 }}>
          <Image
            src={rightSlideBtnSrc}
            layout="fixed"
            width="42"
            height="72"
            alt="left button"
          />
        </Button>
      )}
      <ItemsContainer ref={container} onScroll={handleScroll}>
        {items.map(({ attributes, id }) => (
          <SalesItem
            key={id}
            price={attributes.price}
            title={attributes.name}
            discount={attributes.discount}
            image={attributes.image}
            direction="column"
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default RecommendSection;
