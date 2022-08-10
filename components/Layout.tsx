import React, { PropsWithChildren, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { throttle } from "lodash";

interface LayoutProps extends PropsWithChildren {
  title?: string;
}

export default function Layout({ title, children }: LayoutProps) {
  const router = useRouter();

  const position = useRef(0);
  const [expanded, setExpanded] = useState(true);

  const throttled = useRef(
    throttle(() => {
      let moving = window.scrollY;
      setExpanded(position.current > moving);
      position.current = moving;
    })
  );

  useEffect(() => {
    const handleScroll = throttled.current;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header expanded={expanded} />
      {children}
      {router.pathname === "/" && <Footer />}
    </div>
  );
}

Layout.defaultProps = {
  title: "핏펫몰",
};
