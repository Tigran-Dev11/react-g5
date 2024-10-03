import React from "react";
import "./App.css";

import Router from "./router/routes";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
