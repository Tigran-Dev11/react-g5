
import { useState } from "react";
import style from "./todo.module.scss";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const Todo = () => {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    const onChange = (e) => {
        setValue(e.target.value)
    };
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(value.trim().length === 0){
          setValue("")
          return
        };

        const todo = {
            id: uuidv4(),
            name: value,
            completed: false
        };
        setTodos([...todos, todo]);
        setValue("")
    };

    const deleteTodo = (id) => {
            const filteredTodos = todos.filter((todo) => todo.id !== id);
            setTodos(filteredTodos)  
    }; 

    const checkedTodo = (id) => {
            const checked = todos.map((todo) => {
             if(todo.id === id) todo.completed = !todo.completed 
              return todo
            })
            setTodos(checked)
           console.log(checked);       
    }
         
   

    return(
        <div className={style.form}> 
             <form onSubmit={onSubmit}>     
                <input type="text" onChange={onChange} value={value}/>
                <button>Add</button>
                <div className={style.select}>
                    <select>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
               </div>
            </form>
            <div className={style.todo_box}>
                <ul className={style.ul}>
                    {
                        todos.map(todo => {
                            return <li className={todo.completed ? style.done: style.li} key={todo.id}>{todo.name} 
                                      <span>
                                        <button  onClick={() => checkedTodo(todo.id)}><FaCheck /></button>
                                        <button onClick={() => deleteTodo(todo.id)}><RiDeleteBin6Line /></button>
                                      </span>
                                  </li>
                        })
                    }
                </ul>
            </div>
        </div>
       
    )
}

export default Todo