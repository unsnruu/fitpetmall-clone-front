import { Global, css } from "@emotion/react";
import type { AppProps } from "next/app";

const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
