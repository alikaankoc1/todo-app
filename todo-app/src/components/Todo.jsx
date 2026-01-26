import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo;
  const [editable, setEdiTable] = useState(false);
  const removeTodo = () => {
    onRemoveTodo(id);
  };
  return (
    <div className="todo-item">
      <div>{content}</div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={() => setEdiTable(false)} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEdiTable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
