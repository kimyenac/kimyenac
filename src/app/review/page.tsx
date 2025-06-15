import { Metadata } from "next";
import React from "react";
import SimpleInfo from "@/component-presentation/SimpleInfo";
import PostList from "./_component/PostList";

export const metadata: Metadata = {
  title: "개발 외 감상들",
  description: "kimyenac-review",
};

const Page = () => {
  return (
    <>
      <SimpleInfo description="개발 외 감상들을 기록하다" />
      <PostList />
    </>
  );
};

export default Page;
