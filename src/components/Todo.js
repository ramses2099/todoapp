import React from "react";

const Todo = ({ todo, todoDelete, todoCompleted , setTodoEdit}) => {
  const { id, title, description, completed } = todo;

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-end">
          {title}

          <button
            className={`btn btn-sm ${completed ? 'btn-outline-success' : 'btn-success'}  ms-2`}
            onClick={() => todoCompleted(id)}
          >
            {completed ? "Complete" : "Finish"}
          </button>
        </h3>
        <p className="card-text text-end">{description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-outline-primary me-2" onClick={(e)=>setTodoEdit(todo)}>
            Editas
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={(e) => todoDelete(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
