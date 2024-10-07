import "./App.css";
import {Register}from "./webParts/register/index"
import {Login} from "./webParts/login/index"
import { Contact } from "./webParts/contact/index";
import {Home} from "./webParts/home/index"
import {Router} from "../src/router/routes"
function App() {
  return (<Home />, <Register />, <Login />, <Contact />, <Router />);
}

export default App;
