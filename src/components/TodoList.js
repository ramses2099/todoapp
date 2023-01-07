import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoCompleted, setTodoEdit }) => {
  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      {todos.length ===0 ? (
        <div className="alert alert-danger" role="alert">
          no todo in the list, please add one!!!
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            todoDelete={todoDelete}
            todoCompleted={todoCompleted}
            setTodoEdit={setTodoEdit}
            key={todo.id}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
