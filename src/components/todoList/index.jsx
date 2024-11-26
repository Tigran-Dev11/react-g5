import s from "./todoList.module.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setValue("");
      return;
    }

    const todo = {
      id: uuidv4(),
      name: value,
      completed: false,
    };

    setTodos([...todos, todo]);
    // localStorage.setItem("todoList", JSON.stringify([...todos, todo]));
    setValue("");
  };

  const checkedTodo = (id) => {
    const checked = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(checked);
    localStorage.setItem("todoList", JSON.stringify(checked));
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todoList", JSON.stringify(filteredTodos));
  };

  //   useEffect(() => {
  //     const items = localStorage.getItem("todoList");

  //     if (items) {
  //       setTodos(JSON.parse(items));
  //     }
  //   }, []);

  console.log(todos);

  return (
    <div className={s.form}>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
        <button>Add</button>
      </form>
      <div className={s.todo_box}>
        <ul className={s.ul}>
          {todos?.map((todo) => {
            return (
              <li key={todo.id} className={todo.completed ? s.done : s.li}>
                {todo.name}
                <span>
                  <button onClick={() => checkedTodo(todo.id)}>
                    <FaCheck />
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <MdDelete />
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
