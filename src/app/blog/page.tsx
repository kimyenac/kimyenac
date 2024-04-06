import PostList from "@/app/blog/_component/PostList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "예나 지금이나 개발로그",
  description: "kimyenac-blog",
};

const Page = () => {
  return <PostList />;
};

export default Page;
