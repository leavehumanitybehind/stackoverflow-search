import { createEffect, createStore } from "effector";
import questionsApi from "../api/questions";

export const fetchDataFx = createEffect(async (val, sort, order) => {
  return await questionsApi.getQuestions(val, sort, order);
});

export const $questions = createStore([]).on(
  fetchDataFx.doneData,
  (_, items) => items
);

fetchDataFx.pending.watch((pending) => pending);

export const fetchQuestionFx = createEffect(async (id) => {
  return await questionsApi.getQuestionById(id);
});

export const $question = createStore([]).on(
  fetchQuestionFx.doneData,
  (_, items) => items.items
);
