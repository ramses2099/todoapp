import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    description: "todo de prueba numero 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "todo de prueba numero 2",
    completed: false,
  },
];


const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {
  const [todos, setTodos] = useState(localTodos|| initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoDelete = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }

    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const todoCompleted = (todoId) => {
    const updateTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updateTodo);
  };

  const todoAdd = (todo) => {
    const objTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };
    const newTodo = [objTodo, ...todos];
    setTodos(newTodo);
  };

  const todoUpdate = (todoEdit) => {
    const updateTodo = todos.map((todo) =>
      todo.id === todoEdit.todoId ? todoEdit : todo
    );

    setTodos(updateTodo);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            setTodoEdit={setTodoEdit}
            todoDelete={todoDelete}
            todoCompleted={todoCompleted}
          />
        </div>
        <div className="col-4">
          <TodoForm
            todoAdd={todoAdd}
            setTodoEdit={setTodoEdit}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
