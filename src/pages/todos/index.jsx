import {TodoSelector,} from "../../libs/redux/todo-slice/selectors";
import s from "./todos.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../libs/redux/todo-slice";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(TodoSelector);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const todo = {
    id: uuidv4,
    task: inputValue,
    completed: false,
  };

  const addTodo = () => {
    if (inputValue.trim().length === 0) {
      setInputValue("");
      return;
    }
    dispatch(todoActions.addTodo(todo));
    setInputValue("");
  };

  const deleteTodo = (id) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const checkedTodo = (id) => {
    dispatch(todoActions.checkedTodo(id));
  };

  const handelSelect = () => {
    
  }

  return (
    <div className={s.wrapper}>
      <div className={s.inpWrapper}>
        <input type="text" onChange={onChange} value={inputValue} />
        <button onClick={addTodo}>Add</button>
          <div className={s.select}>
                    <select onChange={handelSelect}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
            </div>
        </div>
        {
          <ul>
            {todoList?.map((todo) => 
              <li key={todo.id}>
                {todo.task}
                <div className={s.buttons}>
                <div className={todo.completed ? s.checked: s.check} onClick={() => checkedTodo(todo.id)}>
                  <FaCheck />
                </div>
                <div className={s.delete} onClick={() => deleteTodo(todo.id)}>
                  <RiDeleteBin6Line />
                </div>
                </div>
               
              </li>
            )}
          </ul>
        }
     
    </div>
  );
};
export default TodoList;
