import styled from "@emotion/styled";
import SalesItem from "./SaleItem";
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.color.blue};
  height: 123px;
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const ItemContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  padding: 6rem 0;
  justify-content: space-between;
  align-items: flex-start;
`;

function NewProduct() {
  return (
    <Container>
      <Title>따끈따끈 신상품</Title>
      <ItemContainer>
        <SalesItem
          size="small"
          price={1000}
          title="페디그리 독 닭고기 캔"
          direction="column"
        />
        <SalesItem
          size="small"
          price={1000}
          title="페디그리 독 닭고기 캔"
          direction="column"
        />
        <SalesItem
          size="small"
          price={1000}
          title="페디그리 독 닭고기 캔"
          direction="column"
        />
        <SalesItem
          size="small"
          price={1000}
          title="페디그리 독 닭고기 캔"
          direction="column"
        />
      </ItemContainer>
      <div></div>
    </Container>
  );
}

export default NewProduct;
