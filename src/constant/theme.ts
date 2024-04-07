import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      defaultText: string;
      defaultBackground: string;
      defaultGrayColor: string;
      defaultHorizontal: string;
      defaultWhite: string;
      rightActive: string;
      darkActive: string;
      defaultBlack: string;
    };
  }
}

export const lightTheme: Theme = {
  color: {
    defaultText: "#000",
    defaultBackground: "#fff",
    defaultGrayColor: "#bbb",
    defaultHorizontal: "#eee",
    defaultWhite: "#fff",
    defaultBlack: "#000",
    rightActive: "#f03d3d",
    darkActive: "#000",
  },
};

export const darkTheme: Theme = {
  color: {
    defaultText: "#fff",
    defaultBackground: "#000",
    defaultGrayColor: "#bbb",
    defaultHorizontal: "#eee",
    defaultWhite: "#fff",
    rightActive: "#f03d3d",
    darkActive: "#000",
    defaultBlack: "#000",
  },
};
