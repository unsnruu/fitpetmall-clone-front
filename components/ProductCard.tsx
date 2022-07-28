import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div`
  min-width: 200px;
  max-width: 200px;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.shallowGray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

interface ProductCardProps {
  imgSrc: string;
}
function ProductCard({ imgSrc }: ProductCardProps) {
  return (
    <Container>
      {imgSrc && <Image src={imgSrc} layout="fill" alt="" />}
    </Container>
  );
}

export default ProductCard;
