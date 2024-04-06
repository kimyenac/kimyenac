"use client";

import styled from "@emotion/styled";
import { getPostDetail } from "@/app/blog/_service/posts";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "mdx/types";
import Link from "next/link";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const Post = ({ slug }: { slug: string }) => {
  const post = getPostDetail(slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Wrap>
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
  gap: 20px;
`;
