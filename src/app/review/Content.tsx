"use client";

import { useRecoilState } from "recoil";
import { selectedReviewCategoryStore } from "@/store/categoryStore";
import PostList from "@/app/_component/post/PostList";
import { reviewCategoryList } from "@/constant";
import React from "react";

const Content = () => {
  const [selectedReviewCategory, setSelectedReviewCategory] = useRecoilState(
    selectedReviewCategoryStore,
  );

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
