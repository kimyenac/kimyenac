import { atom } from "recoil";

export const selectedTechCategoryStore = atom<string | undefined>({
  default: undefined,
  key: "selectedTechCategory-key",
});

export const selectedReviewCategoryStore = atom<string | undefined>({
  default: undefined,
  key: "selectedReviewCategory-key",
});
