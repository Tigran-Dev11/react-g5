import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./register.module.scss";
import { useNavigate } from "react-router-dom";
import { SCHEMAS } from "../../utils/validation-schemas";
import Button from "../../common/button";


const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit,formState: { errors }, } = useForm({resolver: yupResolver(SCHEMAS.registerSchema)
    });

    const onSubmit = (data) => {
        localStorage.setItem("data", JSON.stringify(data));
        navigate("/login"); 
    }

   

    return(
        <div className={s.register}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="first name" {...register("firstName")}/>
                <p>{errors?.firstName?.message}</p>
                <input type="text" placeholder="last name" {...register("lastName")}/>
                <p>{errors?.lastName?.message}</p>
                <input type="email" placeholder="email " {...register("email")}/>
                <p>{errors?.email?.message}</p>
                <input type="password" placeholder="password" {...register("password")}/>
                <p>{errors?.password?.message}</p>
                <input type="password" placeholder="confirm password" {...register("confirmPassword")}/>
                <p>{errors?.confirmPassword?.message}</p>
                <Button text="Register"/>
                
            </form>
        </div>
    )
}
 export default Register;