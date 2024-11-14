import { useEffect } from "react";
import "./App.css";

import Header from "./components/header";
import Router from "./router/routes";

function App() {




  useEffect(()=>{
    //get data local storage

    //dispach data to redux
  },[])


  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
