import styled from "@emotion/styled";
import CategorySection from "./CategorySection";

const Container = styled.div`
  height: 17rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ListHomeCategory() {
  return (
    <Container>
      <CategoryNav />
      <div>
        <CategorySection />
        {/* <CategorySection /> */}
        {/* <CategorySection /> */}
        {/* <CategorySection /> */}
      </div>
    </Container>
  );
}

function CategoryNav() {
  return (
    <div style={{ background: "red" }}>
      <span>사료</span> <span>간식</span> <span>용품</span>{" "}
      <span>건강관리</span>
    </div>
  );
}

export default ListHomeCategory;
