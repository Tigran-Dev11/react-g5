import React, { useState } from "react";
import "./App.css";
import Router from "./router/routes";
import Header from "./components/header";

function App() {

  const [open, setOpen] = useState()
  return (
    <div className="App">
      <Header />
      <Router setOpen={setOpen} open={open}/>
    </div>
  );
}

export default App;
