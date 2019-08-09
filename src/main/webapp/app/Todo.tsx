import React, { MouseEventHandler } from 'react';

interface ITodoProps {
  onClick: MouseEventHandler<any>;
  completed: boolean | null | undefined;
  text: string | null | undefined;
}

const Todo: React.FC<ITodoProps> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

export default Todo;
