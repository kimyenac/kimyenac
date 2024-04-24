import SimpleInfo from "@/component-presentation/SimpleInfo";
import { Metadata } from "next";
import List from "@/app/_component/List";
import Container from "@/app/_component/Container";
import WorkExperience from "@/app/_component/WorkExperience";
import SideProject from "@/app/_component/SideProject";

export const metadata: Metadata = {
  title: "김예나 | 프론트엔드 개발자",
  description: "kimyenac",
};

const Page = () => {
  return (
    <>
      <SimpleInfo description="김예나 | 프론트엔드 개발자" />
      <List>
        <Container
          title="미리디"
          category="Work Experience"
          description="Frontend Developer | 2022.07 - 현재"
        >
          <WorkExperience />
        </Container>
        <Container
          title="EatGPT"
          category="Side Project"
          description="Frontend Developer | 2022.11 - 2024.03"
        >
          <SideProject />
        </Container>
      </List>
    </>
  );
};

export default Page;
