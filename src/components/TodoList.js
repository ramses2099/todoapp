import React from "react";

const TodoList = () => {
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>Title todo</h3>
            <p className="card-text text-right">
                This is some text within a card body.
            </p>
            <hr />
            <div className='d-flex justify-content-end'>
                <button className='btn btn-sm btn-primary me-2'>
                    Editas
                </button>
                <button className='btn btn-sm btn-danger'>
                    Eliminar
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
