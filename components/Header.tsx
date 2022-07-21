import styled from "@emotion/styled";

import HeaderPetSwitch from "./HeaderPetSwitch";
import HeaderMenus from "./Navigation";
import SearchBox from "./SearchBox";
import Image from "next/image";

import hamburgerSrc from "../public/icons/ic_new_hamburger.svg";
import cartSrc from "../public/icons/ic_new_cart.svg";

const StyleContainer = styled.div`
  background-color: white;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 99999;
`;
const UpperContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const IconWrapper = styled.div`
  padding: 0 5px;
`;

function Header() {
  return (
    <StyleContainer>
      <UpperContainer>
        <HeaderPetSwitch />
        <SearchBox />
        <IconWrapper>
          <Image src={hamburgerSrc} alt="category menu" />
        </IconWrapper>
        <IconWrapper>
          <Image src={cartSrc} alt="cart" />
        </IconWrapper>
      </UpperContainer>
      <HeaderMenus />
    </StyleContainer>
  );
}

export default Header;
