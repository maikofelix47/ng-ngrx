import { createAction, props } from '@ngrx/store';

export const addToDo = createAction(
  '[add Todo] AddTodo',
  props<{ toDo: string }>()
);
export const removeTodo = createAction(
  '[remove Todo] RemoveTodo',
  props<{ toDo: string }>()
);
