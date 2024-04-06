"use client";

import styled from "@emotion/styled";
import { getAllPosts } from "@/app/blog/_service/posts";
import PostItem from "@/app/blog/_component/PostItem";

// todo 테마 맞추기
const PostList = () => {
  const posts = getAllPosts();

  return (
    <Wrap>
      <Container>
        {posts.map((item) => (
          <PostItem key={item._id} post={item} />
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
