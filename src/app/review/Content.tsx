"use client";

import PostList from "@/app/_component/post/PostList";
import { reviewCategoryList } from "@/constant";
import React, { useState } from "react";

const Content = () => {
  const [selectedReviewCategory, setSelectedReviewCategory] =
    useState<string>();

  return (
    <PostList
      tag="review"
      categoryList={reviewCategoryList}
      setSelectedCategory={(category: string) =>
        setSelectedReviewCategory((prev) =>
          prev === category ? undefined : category,
        )
      }
      category={selectedReviewCategory}
    />
  );
};

export default Content;
