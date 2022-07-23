import { useState } from "react";

import Image from "next/image";
import styled from "@emotion/styled";

import useInterval from "hooks/useInterval";

const Container = styled.div`
  height: 48.5vw;
  background-color: aqua;
  position: relative;
  overflow: hidden;
  margin-top: 6rem;
  margin-bottom: 0.5rem;
`;
const Item = styled.div<{ index: number }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: green;
  border-radius: 0.5rem;
  transform: ${({ index }) => `translateX(${index * 100}%)`};
  overflow: hidden;
`;

function Carousel() {
  const [index, setIndex] = useState(0);
  useInterval(() => {
    setIndex((prev) => {
      if (prev > -4) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  }, 2000);

  return (
    <div style={{ margin: "0 1rem", padding: "0.5rem 0" }}>
      <Container>
        <Item index={index}>
          <Image src={"/banner-images/abcde.jpeg"} layout="fill" alt="" />
        </Item>
        <Item index={index + 1}>B</Item>
        <Item index={index + 2}>C</Item>
        <Item index={index + 3}>D</Item>
        <Item index={index + 4}>E</Item>
      </Container>
    </div>
  );
}

export default Carousel;
