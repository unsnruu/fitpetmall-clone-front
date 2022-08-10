import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import HeaderPetSwitch from "./HeaderPetSwitch";
import HeaderNav from "./HeaderNav";
import SearchBox from "./SearchBox";

import hamburgerSrc from "../public/icons/ic_new_hamburger.svg";
import cartSrc from "../public/icons/ic_new_cart.svg";

const Container = styled.div<{ expanded: boolean }>`
  background-color: white;
  width: 100%;
  position: fixed;
  top: ${({ expanded }) => (expanded ? 0 : `-60px`)};
  z-index: 99999;
  transition: top 0.4s 0.3s;
  box-shadow: 0px 1px 1px 0px rgb(233, 236, 239);
`;
const UpperContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 0rem;
`;
const IconWrapper = styled.div`
  padding: 0 5px;
`;
interface HeaderProps {
  expanded: boolean;
}

function Header({ expanded }: HeaderProps) {
  return (
    <Container expanded={expanded}>
      <UpperContainer>
        <HeaderPetSwitch />
        <SearchBox />
        <IconWrapper>
          <Link href="/home/category">
            <a>
              <Image src={hamburgerSrc} alt="category menu" />
            </a>
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Image src={cartSrc} alt="cart" />
        </IconWrapper>
      </UpperContainer>
      <HeaderNav />
    </Container>
  );
}

export default Header;
