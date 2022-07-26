import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  height: 8px;
  background-color: ${({ theme }) => theme.color.shallowGray};
`;
function Divider() {
  return <Container></Container>;
}

export default Divider;
