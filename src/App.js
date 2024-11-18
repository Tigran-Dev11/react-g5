import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Router from "./router/routes";
import { productActions } from "./libs/redux/productSlice";
import { useDispatch } from "react-redux";


function App() {

const dispach = useDispatch();


  useEffect(()=>{
    //get data local storage
    const basketItems = JSON.parse(localStorage.getItem("products"))
  //  console.log(basketItems);
    //dispach data to redux
    dispach(productActions.getExistingDataLocalStorage(basketItems))
  },[])


  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
