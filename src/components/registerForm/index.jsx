import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";
import { VALIDATION } from "../../utils/validationSchema";

import "./style.css";

export const RegisterForm = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION.registerValidation) });

  const onSubmit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/login");
  };

  

  console.log(errors);
  return (
    <div className="registerPage">
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>RegisterPage</h1>
        <input
          type="text"
          placeholder="first-name"
          {...register("firstName")}
        />
        <p>{errors?.firstName?.message}</p>

        <input type="text" placeholder="last-name" {...register("lastName")} />
        <p>{errors?.lastName?.message}</p>

        <input type="email" placeholder="email" {...register("email")} />
        <p>{errors?.email?.message}</p>

        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors?.password?.message}</p>
        <input
          type="password"
          placeholder="password"
          {...register("confirmPassword")}
        />
        <Button text="Registration" />
      </form>
    </div>
  );
};
