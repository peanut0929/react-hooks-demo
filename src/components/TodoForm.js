import React, { useRef } from 'react';

const TodoForm = ({ addTodo }) => {
  const inputEl = useRef(null);

  const submitHandle = e => {
    e.preventDefault();

    const { value } = inputEl.current;

    if (value) {
      addTodo(value);
      inputEl.current.value = '';
    }
  };

  return (
    <form action="" onSubmit={submitHandle}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="待办事项"
          ref={inputEl}
        />
      </div>
      <button className="btn btn-primary btn-block">添加待办</button>
    </form>
  );
};

export default TodoForm;
