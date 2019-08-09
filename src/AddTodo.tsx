import React, { FormEvent, RefObject } from 'react';
import { addTodo } from './actions';
import { connect } from 'react-redux';

const AddTodo: React.FC<any> = ({ dispatch }) => {
  const input: RefObject<HTMLInputElement> = React.createRef();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!input.current!.value.trim()) {
      return;
    }
    dispatch(addTodo(input.current!.value));
    input.current!.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <input ref={input} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(
  null,
  null
)(AddTodo);
