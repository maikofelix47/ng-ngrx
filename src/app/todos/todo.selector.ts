import { createSelector } from "@ngrx/store";
import { Todo } from "./todo";

export const selectTodos = createSelector<any>('todos');