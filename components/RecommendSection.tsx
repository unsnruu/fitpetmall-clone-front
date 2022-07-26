import styled from "@emotion/styled";
import SalesItem from "./SaleItem";

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(10, 1fr);
  overflow: hidden;
`;

interface RecommendItem {
  price: number;
  discount?: number;
  title: string;
}

function RecommendSection() {
  const item: RecommendItem[] = [
    { discount: 10, price: 1000, title: "테스트 뿅뿅이" },
    { discount: 30, price: 4000, title: "테스트 간식" },
    { price: 1500, title: "테스트 배변판" },
    { discount: 5, price: 12345, title: "테스트 노즈워크" },
    { discount: 10, price: 1000, title: "테스트 뿅뿅이" },
    { discount: 30, price: 4000, title: "테스트 간식" },
    { price: 1500, title: "테스트 배변판" },
    { discount: 5, price: 12345, title: "테스트 노즈워크" },
    { discount: 10, price: 1000, title: "테스트 뿅뿅이" },
    { discount: 30, price: 4000, title: "테스트 간식" },
    { price: 1500, title: "테스트 배변판" },
    { discount: 5, price: 12345, title: "테스트 노즈워크" },
    { discount: 10, price: 1000, title: "테스트 뿅뿅이" },
    { discount: 30, price: 4000, title: "테스트 간식" },
    { price: 1500, title: "테스트 배변판" },
    { discount: 5, price: 12345, title: "테스트 노즈워크" },
    { discount: 5, price: 12345, title: "테스트 노즈워크" },
    { discount: 10, price: 1000, title: "테스트 뿅뿅이" },
    { discount: 30, price: 4000, title: "테스트 간식" },
    { price: 1500, title: "테스트 배변판" },
  ];
  return (
    <div>
      <h2>최근 찾던 상품과 함께 보면 좋은 상품</h2>
      <ItemContainer>
        {item.map(({ discount, price, title }, idx) => (
          <SalesItem
            key={title + idx}
            price={price}
            title={title}
            discount={discount}
            direction="column"
          ></SalesItem>
        ))}
      </ItemContainer>
    </div>
  );
}
export default RecommendSection;
