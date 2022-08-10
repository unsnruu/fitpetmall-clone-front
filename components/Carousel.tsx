import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

import { API_URL } from "../config";
import { StrapiReturn, ImageAttr, StrapiData } from "../types";
import useInterval from "hooks/useInterval";
import useThrottle from "hooks/useThrottle";

import RightIconSrc from "../public/icons/rightSlideBtn_medium.svg";
import LeftIconSrc from "../public/icons/leftSlideBtn_medium.svg";

const DELAY_TIME = 3000;
const TRANSITION_TIME = 500;

const Container = styled.div`
  height: 48.5vw;
  position: relative;
  overflow: hidden;
  display: flex;
  border-radius: 1rem;
  justify-content: center;
  margin: 0rem 1rem 0.5rem 1rem;
`;

const Item = styled.div<{ visible: number; idx: number; animate: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  transform: ${({ visible, idx }) => `translateX(${(idx - visible) * 100}%)`};
  overflow: hidden;
  ${({ animate }) => animate && `transition: transform ${TRANSITION_TIME}ms`}
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

interface EventAttr {
  text: string;
  image: StrapiReturn<ImageAttr>;
}

function Carousel() {
  const [raws, setRaws] = useState<StrapiData<EventAttr>[]>([]);
  const [images, setImages] = useState<ImageAttr[]>([]);

  const [visible, setVisible] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [delay, setDelay] = useState<number | null>(DELAY_TIME);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`${API_URL}/events?populate[0]=image`);
        const { data } = (await res.json()) as StrapiReturn<EventAttr>;
        if (Array.isArray(data)) {
          setRaws(data);
        }
      } catch (err) {
        console.error("failed to get carousel images from server");
        const res = await fetch(`http://localhost:3000/api/carousel`);
        const { data } = (await res.json()) as StrapiReturn<EventAttr>;
        if (Array.isArray(data)) {
          setRaws(data);
        }
      }
    };

    fetchImages();
  }, []);

  //init images
  useEffect(() => {
    const rawImages = raws.map(({ attributes }) => {
      const { image } = attributes;
      const { data: imageData } = image as StrapiReturn<ImageAttr>;
      if (!Array.isArray(imageData)) {
        const { attributes } = imageData;
        return attributes;
      } else {
        throw new Error(`failed to produce images`);
      }
    });
    let images: ImageAttr[] = [];
    if (rawImages.length) {
      const first = rawImages[0];
      const last = rawImages[rawImages.length - 1];
      images = [last, ...rawImages, first];
    }
    setImages(images);
  }, [raws]);

  useEffect(() => {
    if (visible === images.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setVisible(1);
      }, TRANSITION_TIME + 100);
    }
    if (visible === 0) {
      setTimeout(() => {
        setAnimate(false);
        setVisible(images.length - 2);
      }, TRANSITION_TIME + 100);
    }
    if (visible === 1) {
      setTimeout(() => {
        setAnimate(true);
      }, 0);
    }
    if (visible === images.length - 2) {
      setTimeout(() => {
        setAnimate(true);
      }, 0);
    }
  }, [images.length, visible]);
  useEffect(() => {
    if (delay === null) {
      setDelay(DELAY_TIME);
    }
  }, [delay]);

  useInterval(() => {
    if (!images) return;
    setVisible((prev) => prev + 1);
  }, delay);

  const handleClickLeft = useThrottle(() => {
    setDelay(null);
    setVisible((prev) => prev - 1);
  }, TRANSITION_TIME + 100);

  const handleClickRight = useThrottle(() => {
    setDelay(null);
    setVisible((prev) => prev + 1);
  }, TRANSITION_TIME + 100);

  return (
    <Container>
      {images?.map(({ formats, caption }, index) => (
        <Item key={index} visible={visible} idx={index} animate={animate}>
          <Image src={formats.medium.url} layout="fill" alt={caption} />
        </Item>
      ))}
      <ButtonContainer>
        <ButtonWrapper
          style={{
            left: 0,
          }}
          onClick={handleClickLeft}
        >
          <Image src={LeftIconSrc} alt="left button" />
        </ButtonWrapper>
        <ButtonWrapper
          style={{
            right: 0,
          }}
          onClick={handleClickRight}
        >
          <Image src={RightIconSrc} alt="right button" />
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
}

export default Carousel;
