import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpdate ,setTodoEdit}) => {
  const [formValue, setFormValue] = useState(initialFormValues);
  const { title, description } = formValue;
  const [error, setError] = useState(null);
  const [successMessage, seTsuccessMessage] = useState(null);

  //hook effect
  useEffect(() => {
    if (todoEdit) {
      setFormValue(todoEdit);
    }else{
      setFormValue(initialFormValues);
    }
  }, [todoEdit]);

  const handlerChange = (e) => {
    const changeFormValue = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(changeFormValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("the field title is required");
      return;
    }

    if (description.trim() === "") {
      setError("the field description is required");
      return;
    }

    if (todoEdit) {
      todoUpdate(formValue);
      seTsuccessMessage("todo update successfuly");
      setTodoEdit(null);
    } else {
      todoAdd(formValue);
      seTsuccessMessage("todo add successfuly");
    }

    setError(null);
    setTimeout(() => seTsuccessMessage(null), 2000);
    setFormValue(initialFormValues);
  };

  const handleCancelTodo =(e) =>{
    setTodoEdit(null);
    setFormValue(initialFormValues);
  }


  return (
    <div>
      <h1>{todoEdit ? "Edit Todo" : "Add Todo"} </h1>
      {todoEdit && (
        <button className="btn btn-warning mb-2" onClick={(e)=>handleCancelTodo()}>
         Cancel Edit
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handlerChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="txtaDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handlerChange}
          ></textarea>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary">
            {todoEdit ? "Edit Todo" : "Add Todo"}
          </button>
        </div>
      </form>
      <div>
        {error ? (
          <div className="alert alert-danger mt-2" role="alert">
            {error}
          </div>
        ) : null}
      </div>
      <div>
        {successMessage && (
          <div className="alert alert-success mt-2" role="alert">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
