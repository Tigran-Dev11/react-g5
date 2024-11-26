import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoComponent=({ todo, deleteTodo, toggleCompleted })=> {
  function handleChange() {
    toggleCompleted(todo.id);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={handleChange} />
      <p>{todo.value}</p>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}
