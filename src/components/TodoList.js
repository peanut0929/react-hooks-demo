import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list list-group mt-4">
      {todos.length === 0 && (
        <li className="list-group-item text-center">暂无待办</li>
      )}
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
