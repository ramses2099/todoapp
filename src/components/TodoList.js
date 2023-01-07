import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoCompleted }) => {
  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          todoDelete={todoDelete}
          todoCompleted={todoCompleted}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
