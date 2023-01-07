import React, { useState } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd }) => {
  const [formValue, setFormValue] = useState(initialFormValues);
  const { title, description } = formValue;
  const [error, setError] = useState(null);

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

    if ( description.trim() === "") {
        setError("the field description is required");
        return;
      }
    todoAdd(formValue);
    setError(null);
    setFormValue(initialFormValues);
  };

  return (
    <div>
      <h1>Add Todo </h1>
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
          <button className="btn btn-primary">Add todo</button>
        </div>
      </form>
      <div>
        {error ? (
          <div className="alert alert-danger mt-2" role="alert">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TodoForm;
