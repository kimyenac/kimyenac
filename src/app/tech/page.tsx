import { Metadata } from "next";
import React from "react";
import SimpleInfo from "@/component-presentation/SimpleInfo";
import PostList from "./_component/PostList";

export const metadata: Metadata = {
  title: "예나 지금이나 개발로그",
  description: "kimyenac-tech",
};

const Page = () => {
  return (
    <>
      <SimpleInfo description="예나 지금이나 개발로그" />
      <PostList />
    </>
  );
};

export default Page;
