import { useState } from "react"
import { TodoComponent } from "../../components/todoComponent"
import * as S from "./styled"

export const TodoList=()=>{
    

         const [todos, setTodos] = useState([
 {
 id: 1,
 text: 'Doctor Appointment',
 completed: true
 },
 {
 id: 2,
 text: 'Meeting at School',
 completed: false
 }
 ]);
 
 const [value, setValue] = useState('');
function addTodo(value) {
 const newTodo = {
 id: Date.now(),
 value,
 completed: false
 };
 setTodos([...todos, newTodo]);
 setValue('');
 }
function deleteTodo(id) {
 setTodos(todos.filter(todo => todo.id !== id));
 }
function toggleCompleted(id) {
 setTodos(todos.map(todo => {
 if (todo.id === id) {
 return {...todo, completed: !todo.completed};
 } else {
 return todo;
 } 
 }));
 }
return (
 <div className="todo-list">
 {todos.map(todo => (
 <TodoComponent
 key={todo.id} 
 todo={todo}
 deleteTodo={deleteTodo}
 toggleCompleted={toggleCompleted} 
 />
 ))}
<input
 value={value}
 onChange={e => setValue(e.target.value)} 
 />
<button onClick={() => addTodo(value)}>Add</button>
 </div>
 );
}
export default TodoList;

 
