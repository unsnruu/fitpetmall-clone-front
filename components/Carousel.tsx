import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import qs from "qs";

import useInterval from "hooks/useInterval";
import { API_URL } from "../config";
import { StrapiReturn, ImageAttr, StrapiData } from "../types";

const Container = styled.div`
  height: 48.5vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 0rem 1rem 0.5rem 1rem;
`;

const Item = styled.div<{ visible: number }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  transform: ${({ visible }) => `translateX(${visible * 100}%)`};
  overflow: hidden;
`;

interface EventAttr {
  text: string;
  image: StrapiReturn<ImageAttr>;
}

function Carousel() {
  const [visible, setVisible] = useState(0);
  const [raws, setRaws] = useState<StrapiData<EventAttr>[]>([]);
  const [images, setImages] = useState<ImageAttr[]>();

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch(`${API_URL}/events?populate[0]=image`);
      const { data } = (await res.json()) as StrapiReturn<EventAttr>;

      if (Array.isArray(data)) {
        setRaws(data);
      }
    };

    getImages();
  }, []);

  useEffect(() => {
    const images = raws.map(({ attributes }) => {
      const { image } = attributes;
      const { data: imageData } = image as StrapiReturn<ImageAttr>;
      if (!Array.isArray(imageData)) {
        const { attributes } = imageData;
        return attributes;
      } else {
        throw new Error(`failed to manufacture image`);
      }
    });
    setImages(images);
  }, [raws]);

  useInterval(() => {
    if (!images) return;

    setVisible((prev) => {
      if (prev > -images.length + 1) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  }, 3000);

  return (
    <Container>
      {images?.map(({ formats, caption }, index) => (
        <Item key={caption} visible={visible + index}>
          <Image src={formats.medium.url} layout="fill" alt={caption} />
        </Item>
      ))}
    </Container>
  );
}

export default Carousel;
