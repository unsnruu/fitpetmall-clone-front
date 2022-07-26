import { Global, css, ThemeProvider, Theme } from "@emotion/react";
import type { AppProps } from "next/app";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    color: rgb(73, 80, 87);
  }
`;
const theme: Theme = {
  color: {
    gray: `rgb(241, 243, 245);`,
    blue: `rgb(20, 130, 255)`,
    deepGray: `rgb(134, 142, 150)`,
    red: `rgb(255, 89, 103)`,
    black: `rgb(73, 80, 87)`,
    shallowGray: `rgb(248, 249, 250)`,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
