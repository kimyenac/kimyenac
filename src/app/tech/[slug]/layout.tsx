import { Metadata } from "next";
import { getPostDetail } from "@/service/posts";

export function generateMetadata({
  params: { slug },
}: Readonly<{ params: { slug: string } }>): Metadata {
  const post = getPostDetail({ slug, tag: "tech" });

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
