import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const todo = {
      name: value,
      id: uuidv4(),
      completed: false,
    };

    setTodos([...todos, todo]);
    setValue("");
  };

  const deleteTodo = (id) => {
    const filtredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filtredTodos);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
        <button>add</button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.name} <button onClick={() => deleteTodo(todo.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
