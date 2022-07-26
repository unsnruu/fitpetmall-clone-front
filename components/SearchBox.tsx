import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import searchSrc from "../public/icons/ic_new_search.svg";

const StyledContainer = styled.a`
  flex-grow: 1;
  padding: 0 10px 0 20px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 1rem;
  cursor: pointer;
`;
const PlaceHolder = styled.span`
  font-size: 14px;
  color: rgb(179, 189, 199);
`;

function SearchBox() {
  return (
    <Link href="/search">
      <StyledContainer>
        <PlaceHolder>검색어를 입력해 주세요!</PlaceHolder>
        <Image src={searchSrc} alt="search" />
      </StyledContainer>
    </Link>
  );
}
export default SearchBox;
