import styled from "@emotion/styled";
import ProductSamllCard from "./ProductSamllCard";
import ProductCard from "./ProductCard";

const Container = styled.div<{ direction: "column" | "row" }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;
const DiscountSpan = styled.span`
  color: red;
`;
const PriceSpan = styled.span`
  font-weight: 700;
`;

interface SalesItemProps {
  title: string;
  discount?: number;
  price: number;
  size: "default" | "small";
  direction: "row" | "column";
}
export default function SalesItem({
  discount,
  price,
  title,
  size,
  direction,
}: SalesItemProps) {
  return (
    <Container direction={direction}>
      {size === "default" ? <ProductCard /> : <ProductSamllCard />}
      <div>
        <p>{title}</p>
        <div>
          {discount ? <DiscountSpan>{discount}%</DiscountSpan> : null}
          <PriceSpan>{price}원</PriceSpan>
        </div>
      </div>
    </Container>
  );
}

SalesItem.defaultProps = {
  size: "default",
  direction: "row",
};
