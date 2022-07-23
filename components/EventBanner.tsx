import styled from "@emotion/styled";

const Container = styled.div`
  height: 3rem;
  margin: 0 1rem;
`;
const Item = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 0.5rem;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 11px 20px;
`;
const Emphasis = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

function EventBanner() {
  return (
    <Container>
      <Item>
        <span>
          리뷰 작성시 <Emphasis>결제 금액의 10%</Emphasis>를 드려요!
        </span>
      </Item>
    </Container>
  );
}

export default EventBanner;
