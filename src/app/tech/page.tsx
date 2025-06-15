import { Metadata } from "next";
import React from "react";
import SimpleInfo from "@/component-presentation/SimpleInfo";
import Content from "@/app/tech/Content";

export const metadata: Metadata = {
  title: "예나 지금이나 개발로그",
  description: "kimyenac-tech",
};

const Page = () => {
  return (
    <>
      <SimpleInfo description="예나 지금이나 개발로그" />
      <Content />
    </>
  );
};

export default Page;
