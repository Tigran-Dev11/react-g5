import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { MENU } from "../../utils/constant";
import Button from "../../common/button";
import {useLocalStorage} from "../../hooks/useLocalStorage"
import { VALIDATION } from "../../utils/validationSchema";
import { Input } from "../../common/input";
import * as S from "./styled";

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION.loginValidation) });

  const { getItem, removeItem } = useLocalStorage("data");

  const onSubmit = (data) => {
     const regData = getItem(data);
     if (
       data?.email === regData?.email &&
       data?.password === regData?.password
     ) {
       navigate(MENU.HOME);
       removeItem(data);
     } else {
       alert(`Please check the entered data again
`);
     }
  };

  return (
    <S.LoginComponent className="loginPage">
      <S.LoginForm className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <S.LoginTitle>Log-in</S.LoginTitle>

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
      </S.LoginForm>
    </S.LoginComponent>
  );
};

