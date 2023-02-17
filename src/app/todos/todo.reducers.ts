import { createReducer, on } from '@ngrx/store';
import { addToDo, removeTodo } from './todo.actions';

const initialState: string[] = [];

export const todosReducer = createReducer(
  initialState,
  on(addToDo, (state, { toDo }) => {
    return [...state, toDo];
  }),
  on(removeTodo, (state, { toDo }) => {
    return [...state].filter((todo) => {
      return todo !== toDo;
    });
  })
);
