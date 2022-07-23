import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import throttle from "utils/throttle";

interface LayoutProps extends PropsWithChildren {
  title?: string;
}

export default function Layout({ title, children }: LayoutProps) {
  const [position, setPosition] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      console.log("adsfasdf");
      setExpanded(position > moving);
      setPosition(moving);
    };
    const throttledHandleScroll = throttle(handleScroll);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [position]);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header expanded={expanded} />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "핏펫몰",
};
