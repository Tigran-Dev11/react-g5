import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";
import { VALIDATION } from "../../utils/validationSchema";
import {Input} from "../../common/input"
import "./style.css";

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION.loginValidation) });

  const onSubmit = (body) => {
    let data = localStorage.getItem("data");

    if (data) {
      let response = JSON.parse(data);

      if (body.email === response.email && body.password === response.password) {
        navigate("/home");
      }
    }
  };

  return (
    <div className="loginPage">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>Log-in</h1>

        <Input
          type="email"
          placeholder="email"
          register={register("email")}
          error={errors?.email?.message}
        />

        <Input
          type="password"
          placeholder="password"
          register={register("password")}
          error={errors?.password?.message}
        />
        <Button text="Log-in" />
      </form>
    </div>
  );
};
