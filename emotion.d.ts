import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      gray: string;
      blue: string;
      deepGray: string;
      shallowGray: string;
      red: string;
      black: string;
    };
  }
}
