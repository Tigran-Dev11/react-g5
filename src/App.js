import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Form from "./components/form";

function App() {
  const [count, setCount] = useState(10);
  const [number, setNumber] = useState(2);
  const [date, setDate] = useState({})

  const parse = (data) => {
    setDate(data)
  };

  return (
    <div className="App" id="app">
      <h1>Welcome to React App</h1>
      <Counter count={count} setCount={setCount} date={date}/>
      <Form parse={parse} />
    </div>
  );
}

export default App;
