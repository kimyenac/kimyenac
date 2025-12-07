"use client";

import { Provider } from "jotai";
import ThemeProvider from "@/component/ThemeProvider";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
