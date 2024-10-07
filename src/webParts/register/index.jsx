import {Header} from "../../webPages/header/index"
import {Footer} from "../../webPages/footer/index"
import {RegisterForm} from "../../registerForm/index"
import "../register/style.css"

export const Register=()=>{
    return (
      <div>
        <Header />
        <RegisterForm/>
        <Footer/>
      </div>
    );
} 