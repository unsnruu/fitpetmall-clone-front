//todo: 임시적으로 만든 파일임. 나중에 SaleItem으로 통합할 것!

import styled from "@emotion/styled";
import { useEffect } from "react";
import { ImageAttr, StrapiData, StrapiReturn } from "types";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.div`
  & div {
    margin-bottom: 0.3rem;
  }
`;
const Title = styled.h4`
  font-size: 18px;
  font-weight: 400;
  word-break: break-all;
`;
const DiscountSpan = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: 18px;
  font-weight: 700;
  margin-right: 0.3rem;
`;
const PriceSpan = styled.span`
  font-weight: 700;
  font-size: 18px;
`;
const Score = styled.span`
  font-size: 14px;
  & span {
    color: ${({ theme }) => theme.color.deepGray};
    font-weight: 300;
  }
`;

interface TimeSaleItemProps {
  price: number;
  discount: number;
  name: string;
  image: StrapiReturn<ImageAttr>;
}

const getDiscountedPrice = (price: number, discount: number) => {
  return Math.round((price * ((100 - discount) / 100)) / 100);
};
const addCommas = (num: number) => {
  const arr = num.toString().split("").reverse();

  let i = 3;
  while (i < arr.length) {
    arr.splice(i, 0, ",");
    i += 3;
  }
  return arr.reverse().join("");
};

function TimeSaleItem({ discount, name, price, image }: TimeSaleItemProps) {
  const discounted = addCommas(getDiscountedPrice(price, discount) * 100);

  let { data } = image;
  let { attributes } = data as StrapiData<ImageAttr>;

  return (
    <Container>
      <ProductCard imgSrc={attributes.formats.small.url} />
      <Description>
        <div>
          <Title>{name}</Title>
        </div>
        <div>
          <DiscountSpan>{discount}%</DiscountSpan>
          <PriceSpan>{discounted}원</PriceSpan>
        </div>
        <Score>
          <span>⭐️</span>
          <span>4.9</span>
          <span>(8795)</span>
        </Score>
      </Description>
    </Container>
  );
}

export default TimeSaleItem;
