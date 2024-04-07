"use client";

import { RecoilRoot } from "recoil";
import ThemeProvider from "@/component/ThemeProvider";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilRoot>
  );
};

export default Providers;
