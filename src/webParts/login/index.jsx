import { Header } from "../../webPages/header/index";
import {LoginForm} from "../../loginForm/index"
import {Footer} from "../../webPages/footer/index"
import "../login/style.css";

export const Login = () => {
  return (
    <div className="loginPage">
      <Header />
      <LoginForm/>
      <Footer/> 
    </div>
  );
};
