import styled from "@emotion/styled";

import Link from "next/link";
import Layout from "@components/Layout";
import CategorySection from "@components/CategorySection";
import BackIcon from "../../public/icons/ic_left.svg";
import Head from "next/head";
import Image from "next/image";

const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 1px 1px 1px rgb(233, 236, 239);
  padding: 0 1rem;
`;
const ImageWrapper = styled.a`
  width: 50%;
  cursor: pointer;
`;
const Title = styled.h3`
  transform: translateX(-50%);
`;

function CategoryPage() {
  return (
    <div>
      <Head>
        <title>핏펫몰</title>
      </Head>
      <Header>
        <Link href="/">
          <ImageWrapper>
            <Image src={BackIcon} alt="go back" />
          </ImageWrapper>
        </Link>
        <Title>카테고리</Title>
      </Header>
      <CategorySection />
    </div>
  );
}

export default CategoryPage;
