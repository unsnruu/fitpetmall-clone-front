import styled from "@emotion/styled";
import TimeSaleItem from "./TimeSaleItem";

const TimeEmphasis = styled.span`
  color: red;
`;
const ItemContainer = styled.div``;
function TimeSales() {
  return (
    <div>
      <h2>
        타임 세일 <TimeEmphasis>시간</TimeEmphasis> 남음
      </h2>
      <ItemContainer>
        <TimeSaleItem />
        <TimeSaleItem />
        <TimeSaleItem />
      </ItemContainer>
    </div>
  );
}

export default TimeSales;
