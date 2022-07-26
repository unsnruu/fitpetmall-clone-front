import { GetServerSideProps } from "next";
import styled from "@emotion/styled";

import { ImageAttr, StrapiData, StrapiReturn } from "../types";
import { API_URL } from "../config";

import BottomNavigation from "@components/BottomNavigation";
import Carousel from "@components/Carousel";
import Divider from "@components/Divider";
import EventBanner from "@components/EventBanner";
import Layout from "@components/Layout";
import ListHomeSection from "@components/CategorySection";
import NewProductSection from "@components/NewProductSection";
import RecommendSection from "@components/RecommendSection";
import TimeSalesSection from "@components/TimeSaleSection";

export interface ItemAttr {
  name: string;
  price: number;
  discount: number;
  image: StrapiReturn<ImageAttr>;
}
interface HomepageProps {
  items: StrapiData<ItemAttr>[];
}

export default function HomePage({ items }: HomepageProps) {
  console.log(items);
  return (
    <Layout>
      <Carousel />
      <EventBanner />
      <ListHomeSection />
      <Divider />
      <TimeSalesSection items={items} />
      <Divider />
      <RecommendSection />
      <NewProductSection />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${API_URL}/items?populate[0]=image`);
  const { data: items } = (await res.json()) as StrapiReturn<ItemAttr>;

  return { props: { items } };
};
