import { createEffect, createStore } from "effector";
import tagsApi from "../api/tags";

export const getTagsTopQuestionsFx = createEffect(async (tag) => {
  return await tagsApi.getTagsFaq(tag);
});

export const $tags = createStore([]).on(
  getTagsTopQuestionsFx.doneData,
  (_, items) => items
);

getTagsTopQuestionsFx.pending.watch((pending) => pending);
