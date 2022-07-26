import styled from "@emotion/styled";
import { useEffect } from "react";

import type { ItemAttr } from "pages/index";
import type { StrapiData } from "types";

import TimeSaleItem from "./TimeSaleItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 40px;
`;
const Title = styled.h2`
  font-size: 22px;
  padding: 1rem 0;
`;
const TimeEmphasis = styled.span`
  color: ${({ theme }) => theme.color.red};
`;
const ItemContainer = styled.div``;

interface TimeSaleSectionProps {
  items: StrapiData<ItemAttr>[];
}
function TimeSaleSection({ items }: TimeSaleSectionProps) {
  return (
    <Container>
      <Title>
        타임세일 <TimeEmphasis>시간</TimeEmphasis> 남음
      </Title>
      <ItemContainer>
        {items.map(({ attributes, id }) => {
          const { discount, image, name, price } = attributes;
          return (
            <TimeSaleItem
              key={id}
              discount={discount}
              name={name}
              price={price}
              image={image}
            />
          );
        })}
      </ItemContainer>
    </Container>
  );
}

export default TimeSaleSection;
