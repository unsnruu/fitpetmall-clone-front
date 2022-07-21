import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function CategorySection() {
  return (
    <Container>
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
    </Container>
  );
}

function SectionItem() {
  return (
    <div style={{ width: "5.375rem", height: "5.375rem" }}>
      <div>image</div>
      <span>퍼피(~1)세</span>
    </div>
  );
}
