"use client";

import PostList from "@/app/_component/post/PostList";
import { techCategoryList } from "@/constant";
import React, { useState } from "react";

const Content = () => {
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>();

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
