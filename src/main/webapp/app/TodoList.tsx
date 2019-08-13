import React, { MouseEventHandler } from 'react';
import Todo from './Todo';
import {ITodo} from './modules/actions';

interface ITodoListProps {
  todos: ITodo[];
  onTodoClick: (_: number) => MouseEventHandler;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onTodoClick }) => {
  const onClick = (index: number) => () => onTodoClick(index);
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={onClick(index)} />
      ))}
    </ul>
  );
};

export default TodoList;
