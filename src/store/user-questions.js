import { createEffect, createEvent, createStore, forward } from "effector";
import userApi from "../api/user";
export const clearTopQuestions = createEvent()

export const getUserTopTagsFx = createEffect({
  handler: async (id) => {
    clearTopQuestions()
    const res = await userApi.getTopUserTags(id);
    const topTags = res.items.splice(0, 5);
    const tagsList = [];
    topTags.forEach(({ tag_name }) => {
      tagsList.push(tag_name);
    });
    return { tagsList, id };
  },
});

export const getUserTopQuestionsFx = createEffect({
  handler: async ({ tagsList, id }) => {
    if (tagsList.length) return await userApi.getTopUserQuestions(id, tagsList);
    return
  },
});

forward({
  from: getUserTopTagsFx.done.map(({ result }) => result),
  to: getUserTopQuestionsFx,
});

export const $userTopQuestions = createStore([])
.on(
  getUserTopQuestionsFx.doneData,
  (_, items) => items
)
.reset(clearTopQuestions);

getUserTopTagsFx.pending.watch(pending => pending)
getUserTopQuestionsFx.pending.watch(pending => pending)