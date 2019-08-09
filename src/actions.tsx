export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export type FilterType =
  | typeof VisibilityFilters.SHOW_ALL
  | typeof VisibilityFilters.SHOW_COMPLETED
  | typeof VisibilityFilters.SHOW_ACTIVE;

export interface IFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: FilterType;
}

export interface IToggleAction {
  type: typeof TOGGLE_TODO;
  index: number;
}

export interface IAddTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

export interface ITodo {
  text: string;
  completed: boolean;
}

export type TodoActionTypes = IAddTodoAction | IToggleAction | IFilterAction;

export function toggleTodo(index: number): IToggleAction {
  return { type: TOGGLE_TODO, index };
}

export function addTodo(text: string): IAddTodoAction {
  return { type: ADD_TODO, text };
}
