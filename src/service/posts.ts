import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Tag } from "@/type";

export const getAllPosts = ({
  tag,
  category,
}: {
  tag?: Tag;
  category?: string;
}): Post[] => {
  return allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .filter(
      (post) =>
        (tag ? post._raw.sourceFileDir === tag : true) &&
        (category ? post.category.split(' · ').includes(category) : true),
    );
};

export const getPostDetail = ({
  slug,
  tag,
}: {
  slug: string;
  tag: Tag;
}): Post | undefined => {
  const sorted = getAllPosts({ tag });
  return sorted.find((post) => post._raw.sourceFileName.split(".")[0] === slug);
};
