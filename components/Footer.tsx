import styled from "@emotion/styled";

const Container = styled.footer`
  padding: 40px 16px 168px;

  background-color: ${({ theme }) => theme.color.gray};
`;
const ItemsContainer = styled.div`
  display: flex;
`;
const Span = styled.span`
  font-size: 12px;
  color: rgb(140, 148, 156);
  font-weight: 400;
`;
const Emphasis = styled(Span)`
  color: ${({ theme }) => theme.color.deepGray};
  padding: 0px 4px;
  font-weight: 700;
`;

function Footer() {
  return (
    <Container>
      <ItemsContainer style={{ margin: "0px -4px 20px" }}>
        <Emphasis>이용약관</Emphasis>
        <Emphasis>개인(위치)정보 처리방침</Emphasis>
        <Emphasis>위치기반서비스 이용약관</Emphasis>
      </ItemsContainer>
      <ItemsContainer style={{ margin: "0px -4px 8px" }}>
        <Emphasis>고객센터</Emphasis>
        <Emphasis>공지사항</Emphasis>
      </ItemsContainer>
      <ItemsContainer style={{ marginBottom: "20px", flexDirection: "column" }}>
        <Span>평일 9:00~20:00 | 주말(토,일) 9:00~18:00 </Span>
        <Span>공휴일 휴무 | 점심시간 13:00~14:00</Span>
        <Span>핏펫몰 입접 또는 제휴 문의 md@fitpet.co.kr </Span>
        <Span>제휴 문의 contact@fitpet.co.kr </Span>
        <Span>도매 문의 help@junglebook.co.kr</Span>
      </ItemsContainer>
      <ItemsContainer style={{ marginBottom: "20px" }}>
        <Span>
          사이버몰 내 판매되는 상품 중에는 핏펫에 등록한 개별 판매자가 판매하는
          셀러판매 서비스 상품이 포함되어 있습니다. 셀러판매 서비스 상품의 경우
          핏펫은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 핏펫은
          셀러판매 서비스 상품, 거래정보 및 거래 등에 대하여 책임을 지지
          않습니다.
        </Span>
      </ItemsContainer>
      <div style={{ marginBottom: "20px" }}>
        <Span>주식회사 판매 사업자 정보</Span>
        <p>
          <Span>상호: 주식회사 핏펫(Fitpet)</Span>
          <Span>주소: 서울특별시 강남구 테헤란로 107길 6 2층 </Span>
          <Span>대표: 고정욱</Span>
          <Span>사업자번호: 543-87-00755 </Span>
          <Span>사업자번호조회 통신판매업신고번호: 2018-서울강남-01774</Span>
          <Span>개인정보관리자: 성주엽</Span>
          <Span> 전화번호: 02-6339-1800 | 팩스번호: 02-6009-9068</Span>
          <Span>이메일: help@fitpet.co.kr</Span>{" "}
          <Span>구매안전서비스 : 신한은행 채무지급보증 안내</Span>
          <Span>도매문의: contact@fitpet.co.kr</Span>
          <Span>마케팅/제휴: marketing@fitpet.co.kr</Span>
        </p>
      </div>
      <ItemsContainer>
        <Span>Copyright Fitpet, Inc. All rights Reserved.</Span>
      </ItemsContainer>
    </Container>
  );
}

export default Footer;
