import { connect } from 'react-redux';
import { FilterType, ITodo, toggleTodo, VisibilityFilters } from './actions';
import { AppState } from './reducers';
import TodoList from './TodoList';

const getVisibleTodos = (todos: ITodo[], filter: FilterType) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state: AppState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch: any) => ({
  onTodoClick: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
