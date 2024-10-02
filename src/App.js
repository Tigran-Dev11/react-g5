import "./App.css";
import Router from "./router/routes";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";



function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
