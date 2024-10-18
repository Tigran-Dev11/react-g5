import s  from "./login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMAS } from "../../utils/validation-schemas";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";



const Login = () => {

    const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(SCHEMAS.loginSchema)});
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const regData = JSON.parse(localStorage.getItem("data"));
        if(data?.email === regData?.email && data?.password === regData?.password) {
            navigate("/products")
            localStorage.removeItem("data")
        }else{
            alert("Your email and password must match")
            
        }
    }

   

    return(
        <div className={s.login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="email " {...register("email")}/>
                <p>{errors?.email?.message}</p>
                <input type="password" placeholder="password" {...register("password")}/>
                <p>{errors?.password?.message}</p>
                <Button text="Login"/>
            </form>
        </div>
    )
}
export default Login