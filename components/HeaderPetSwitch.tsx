import { useState } from "react";
import styled from "@emotion/styled";

import DogWhiteSrc from "../public/icons/ic_dog_white.svg";
import DogGraySrc from "../public/icons/ic_dog_gray.svg";
import CatWhiteSrc from "../public/icons/ic_cat_white.svg";
import CatGraySrc from "../public/icons/ic_cat_gray.svg";
import Image from "next/image";

interface StyledProps {
  toggle: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 6.375rem;
  height: 2rem;
  background-color: rgb(241, 243, 245);
  border-radius: 1rem;
  cursor: pointer;
`;
const SwtichButton = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 4.5rem;
  height: 2rem;
  background-color: rgb(20, 130, 255);
  border-radius: 1rem;
  transform: ${({ toggle }) => (toggle ? `translateX(0%)` : `translateX(40%)`)};
  /* transition: transform 0.1s linear; */
`;
const SwitchContent = styled.div<StyledProps>`
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  font-size: 12px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  font-weight: 600;
  line-height: 18.858px;
  & span {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  color: white;
`;
const ContainerIcon = styled.div<StyledProps>`
  position: absolute;
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  align-items: center;
`;

function HeaderPetSwitch() {
  const [toggle, setToggle] = useState(false);
  return (
    <StyledContainer onClick={() => setToggle(!toggle)}>
      <SwtichButton toggle={toggle}>
        <SwitchContent toggle={toggle}>
          <Image src={DogWhiteSrc} alt="" />
          <span>강아지</span>
        </SwitchContent>
        <SwitchContent toggle={!toggle}>
          <span>고양이</span>
          <Image src={CatWhiteSrc} alt="" />
        </SwitchContent>
      </SwtichButton>
      <ContainerIcon
        toggle={!toggle}
        style={{
          left: "9px",
        }}
      >
        <Image src={DogGraySrc} alt="" />
      </ContainerIcon>
      <ContainerIcon
        toggle={toggle}
        style={{
          right: "10px",
        }}
      >
        <Image src={CatGraySrc} alt="" />
      </ContainerIcon>
    </StyledContainer>
  );
}

export default HeaderPetSwitch;
