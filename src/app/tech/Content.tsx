"use client";

import { useRecoilState } from "recoil";
import { selectedTechCategoryStore } from "@/store/categoryStore";
import PostList from "@/app/_component/post/PostList";
import { techCategoryList } from "@/constant";
import React from "react";

const Content = () => {
  const [selectedTechCategory, setSelectedTechCategory] = useRecoilState(
    selectedTechCategoryStore,
  );

  return (
    <PostList
      tag="tech"
      categoryList={techCategoryList}
      setSelectedCategory={(category: string) =>
        setSelectedTechCategory((prev) =>
          prev === category ? undefined : category,
        )
      }
      category={selectedTechCategory}
    />
  );
};

export default Content;
