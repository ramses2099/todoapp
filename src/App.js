import React, { useState } from "react";
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

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const todoDelete = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const todoCompleted = (todoId) => {
    const updateTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updateTodo);
  };

  const todoAdd = (todo)=>{
    const objTodo ={
        id: Date.now(),
        ...todo,
        completed:false,

    }
    const newTodo = [ objTodo, ...todos,];
    setTodos(newTodo);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoCompleted={todoCompleted}            
          />
        </div>
        <div className="col-4">
          <TodoForm todoAdd={todoAdd}/>
        </div>
      </div>
    </div>
  );
};

export default App;
