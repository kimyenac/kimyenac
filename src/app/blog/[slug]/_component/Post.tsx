"use client";

import styled from "@emotion/styled";
import { getPostDetail } from "@/app/blog/_service/posts";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { format } from "date-fns";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const Post = ({ slug }: { slug: string }) => {
  const post = getPostDetail(slug);

  if (!post) notFound();

  const postDate = format(post.date, "yyyy-MM-dd");

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Wrap>
      <InfoWrap>
        <Category>{post.category}</Category>
        <Title>{post.title}</Title>
        <Date>{postDate}</Date>
      </InfoWrap>
      <Horizontal />
      <MDXContent components={mdxComponents} />
    </Wrap>
  );
};

export default Post;

const Wrap = styled.div`
  margin: 2.5rem auto;
  max-width: 800px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Category = styled.div`
  font-size: 14px;
  text-decoration: none;
  line-height: 120%;
  color: ${({ theme }) => theme.color.defaultText};
`;

const Title = styled.div`
  font-size: 30px;
  text-decoration: none;
  line-height: 120%;
  font-weight: 700;
  color: ${({ theme }) => theme.color.defaultText};
`;

const Date = styled.div`
  font-size: 14px;
  text-decoration: none;
  line-height: 120%;
  color: ${({ theme }) => theme.color.defaultGrayColor};
`;

const Horizontal = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.defaultHorizontal};
`;
