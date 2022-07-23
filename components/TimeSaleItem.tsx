//todo: 임시적으로 만든 파일임. 나중에 SaleItem으로 통합할 것!

import styled from "@emotion/styled";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const DiscountSapn = styled.span`
  color: red;
`;
const PriceSpan = styled.span`
  font-weight: 700;
`;

function TimeSaleItem() {
  return (
    <Container>
      <ProductCard />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <div>
          <DiscountSapn>50%</DiscountSapn>
          <PriceSpan>6000원</PriceSpan>
        </div>
        <div>
          <span>⭐️</span>
          <span>4.9</span>
          <span>(8795)</span>
        </div>
      </div>
    </Container>
  );
}

export default TimeSaleItem;
