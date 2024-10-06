import "./App.css";
import {Register}from "../src/webParts/register/index"
import {Login} from "./webParts/login/index"
import { Contact } from "./webParts/contact";
import {Home} from "./webParts/home/index"
import {Router} from "../src/router/routes"
function App() {
  return (
    <Home/>,
    <Register />,
    <Login />,
    <Contact/>,
    <Router/>
  );
}

export default App;
