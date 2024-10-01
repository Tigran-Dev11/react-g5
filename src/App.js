import React, { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Router from "./router/routes";

function App() {
  const [number, setNumber] = useState(0);

  // when chaned state and props react component render

  return (
    <div className="App">
      {/* <h1>{number}</h1>
      <Counter number={number} setNumber={setNumber} /> */}

      <Router />
    </div>
  );
}

export default App;
