import { useMDXComponent } from "next-contentlayer/hooks";
import { getPostDetail } from "@/app/blog/_service/posts";
import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const Page = ({ params: { slug } }: Readonly<{ params: { slug: string } }>) => {
  const post = getPostDetail(slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <MDXContent components={mdxComponents} />
    </>
  );
};

export default Page;
