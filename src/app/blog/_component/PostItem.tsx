import styled from "@emotion/styled";
import { Post } from "contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";

// todo 테마 맞추기 2
const PostItem = ({ post }: { post: Post }) => {
  const postDate = format(post.date, "yyyy-MM-dd");

  return (
    <Wrap href={`/blog/${post.slug}`}>
      <Title>{post.title}</Title>
      <Description>{post.description}</Description>
      <Date>{postDate}</Date>
    </Wrap>
  );
};

export default PostItem;

const Wrap = styled(Link)`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1.5px solid #bbb;
  color: #000;
  text-decoration: none;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 120%;
`;

const Date = styled.div`
  font-size: 12px;
  line-height: 120%;
  color: #bbb;
`;
