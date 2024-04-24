import PostList from "@/app/blog/_component/PostList";
import { Metadata } from "next";
import React from "react";
import SimpleInfo from "@/component-presentation/SimpleInfo";

export const metadata: Metadata = {
  title: "예나 지금이나 개발로그",
  description: "kimyenac-blog",
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
