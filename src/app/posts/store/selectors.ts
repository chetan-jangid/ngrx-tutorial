import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/app.state.interface";
import { PostsStateInterface } from "../types/posts.state.interface";

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  state => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  state => state.posts
);

export const errorSelector = createSelector(
  selectFeature,
  state => state.error
);
