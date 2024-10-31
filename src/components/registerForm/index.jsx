import * as S from "./styled"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";
import { Input } from "../../common/input";
import { VALIDATION } from "../../utils/validationSchema";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION.registerValidation) });



  const onSubmit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);  
    navigate("/login");
  };

  console.log(errors);
  return (
    <S.RegisterComponent>
      <S.RegisterForm
        className="registerForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <S.RegisterTitle>RegisterPage</S.RegisterTitle>
        <Input
          type="text"
          placeholder="first-name"
          {...register("firstName")}
        />
        <p>{errors?.firstName?.message}</p>

        <Input type="text" placeholder="last-name" {...register("lastName")} />
        <p>{errors?.lastName?.message}</p>

        <Input type="email" placeholder="email" {...register("email")} />
        <p>{errors?.email?.message}</p>

        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors?.password?.message}</p>

        <Input
          type="password"
          placeholder="password"
          {...register("confirmPassword")}
        />
        <p>{errors?.confirmPasswordpassword?.message}</p>

        <Button text="Registration" />
      </S.RegisterForm>
    </S.RegisterComponent>
  );
};
