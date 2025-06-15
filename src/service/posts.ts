import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const getAllPosts = (tag?: string): Post[] => {
  return allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .filter((post) => (tag ? post.tag === tag : true));
};

export const getPostDetail = ({
  slug,
  tag,
}: {
  slug: string;
  tag: string;
}): Post | undefined => {
  const sorted = getAllPosts();
  return sorted.find(
    (post) => post.tag === tag && post._raw.flattenedPath === slug,
  );
};
