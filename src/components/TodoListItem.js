import React from 'react';

const TodoListItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <div className="row">
        <div className="col-2">
          <input
            type="checkbox"
            checked={todo.completed}
            id={todo.id}
            onChange={() => {
              toggleTodo(todo.id);
            }}
          />{' '}
        </div>
        <div className="col-7">
          <label
            htmlFor={todo.id}
            className={todo.completed ? 'text-muted font-italic' : ''}
          >
            {todo.text}
          </label>
        </div>
        <div className="col-3 text-right">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            删除
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
