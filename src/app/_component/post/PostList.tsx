"use client";

import styled from "@emotion/styled";
import { getAllPosts } from "@/service/posts";
import PostItem from "./PostItem";
import { Tag } from "@/type";
import CategoryList from "./CategoryList";

const PostList = ({
  tag,
  categoryList,
  setSelectedCategory,
  category,
}: {
  tag: Tag;
  categoryList: string[];
  setSelectedCategory: (category: string) => void;
  category?: string;
}) => {
  const posts = getAllPosts({ tag, category });

  return (
    <Wrap>
      <CategoryList
        category={category}
        categoryList={categoryList}
        setSelectedCategory={setSelectedCategory}
      />
      <Container>
        {posts.map((item) => (
          <PostItem key={item._id} post={item} tag={tag} />
        ))}
      </Container>
    </Wrap>
  );
};

export default PostList;

const Wrap = styled.div`
  margin: 2.5rem auto;
  max-width: 800px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
