import React, { useState } from 'react';
import { v4 } from 'uuid';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: v4(),
      text: 'Learn JavaScript',
      completed: false
    },
    {
      id: v4(),
      text: 'Learn React',
      completed: false
    }
  ]);

  const addTodo = text => {
    const newTodo = {
      id: v4(),
      text,
      completed: false
    };

    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-6 col-xs-12">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
