import styled from "@emotion/styled";
import { Post } from "contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";

const PostItem = ({ post }: { post: Post }) => {
  const postDate = format(post.date, "yyyy-MM-dd");

  return (
    <Wrap href={`/review/${post.slug}`}>
      <Title>{post.title}</Title>
      <Description>{post.description}</Description>
      <Date>{`${post.category} · ${postDate}`}</Date>
    </Wrap>
  );
};

export default PostItem;

const Wrap = styled(Link)`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-decoration: none;
  border-top: ${({ theme }) => `1.5px solid ${theme.color.defaultGrayColor}`};
  color: ${({ theme }) => theme.color.defaultText};
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
  color: ${({ theme }) => theme.color.defaultGrayColor};
`;
