import React from "react";
import "../App.css";
function TodoCreate() {
  return (
    <div className="todo-create">
      <input className="todo-input" type="text" placeholder="todo giriniz" />
      <button className="todo-create-btn">Todo Oluştur</button>
    </div>
  );
}

export default TodoCreate;
