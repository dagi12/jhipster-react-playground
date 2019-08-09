import { combineReducers } from 'redux';
import {
  ADD_TODO,
  FilterType,
  ITodo,
  SET_VISIBILITY_FILTER,
  TodoActionTypes,
  TOGGLE_TODO,
  VisibilityFilters
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

// reducer
function visibilityFilter(
  state: string = SHOW_ALL,
  action: TodoActionTypes
): FilterType {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// reducer
function todos(state: ITodo[] = [], action: TodoActionTypes): ITodo[] {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: ITodo = {
        text: action.text,
        completed: false
      };
      return [...state, newTodo];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}

export const todoApp = combineReducers({ visibilityFilter, todos });

export type AppState = ReturnType<typeof todoApp>;

export default todoApp;
