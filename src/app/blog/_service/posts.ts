import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const getAllPosts = (): Post[] => {
  return allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
};

export const getPostDetail = (slug: string): Post | undefined => {
  const sorted = getAllPosts();
  return sorted.find((post) => post._raw.flattenedPath === slug);
};
