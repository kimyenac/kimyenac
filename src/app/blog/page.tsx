import PostList from "@/app/blog/_component/PostList";
import { Metadata } from "next";
import React from "react";
import SimpleInfo from "@/app/blog/_component/SimpleInfo";
import BodyContainer from "@/component/BodyContainer";

export const metadata: Metadata = {
  title: "예나 지금이나 개발로그",
  description: "kimyenac-blog",
};

const Page = () => {
  return (
    <BodyContainer>
      <SimpleInfo />
      <PostList />
    </BodyContainer>
  );
};

export default Page;
