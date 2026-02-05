import Post from "./_component/Post";

const Page = ({ params: { slug } }: Readonly<{ params: { slug: string } }>) => {
  return <Post slug={slug} />;
};

export default Page;
