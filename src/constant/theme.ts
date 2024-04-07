import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      defaultText: string;
      defaultBackground: string;
      defaultGrayColor: string;
      defaultHorizontal: string;
      defaultWhite: string;
      lightActive: string;
      darkActive: string;
      defaultBlack: string;
    };
  }
}

export const lightTheme: Theme = {
  color: {
    defaultText: "#23272c",
    defaultBackground: "#fff",
    defaultGrayColor: "#707070",
    defaultHorizontal: "#c2c2c2",
    defaultWhite: "#fff",
    defaultBlack: "#23272c",
    lightActive: "#c2c2c2",
    darkActive: "#23272c",
  },
};

export const darkTheme: Theme = {
  color: {
    defaultText: "#fff",
    defaultBackground: "#23272c",
    defaultGrayColor: "#bbb",
    defaultHorizontal: "#eee",
    defaultWhite: "#fff",
    lightActive: "#c2c2c2",
    darkActive: "#23272c",
    defaultBlack: "#23272c",
  },
};
