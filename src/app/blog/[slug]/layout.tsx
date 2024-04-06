import { getPostDetail } from "@/app/blog/_service/posts";
import { Metadata } from "next";

export function generateMetadata({
  params: { slug },
}: Readonly<{ params: { slug: string } }>): Metadata {
  const post = getPostDetail(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
