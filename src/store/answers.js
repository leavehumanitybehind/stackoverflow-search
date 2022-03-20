import { createEffect, createEvent, createStore } from "effector";
import questionsApi from "../api/questions";

const clearAnswer = createEvent();
export const getQuestionAnswersFx = createEffect(async (id) => {
  clearAnswer();
  return await questionsApi.getQuestionById(id);
});

export const $questionAnswer = createStore([])
  .on(getQuestionAnswersFx.doneData, (_, items) => items)
  .reset(clearAnswer);

getQuestionAnswersFx.pending.watch((pending) => pending);
