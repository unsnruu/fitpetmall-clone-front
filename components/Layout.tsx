import React, { PropsWithChildren } from "react";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps extends PropsWithChildren {
  title?: string;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "핏펫몰",
};
