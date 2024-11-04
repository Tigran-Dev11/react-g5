import * as S from "./styled";
import { MENU } from "../../utils/constant";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";
import { Input } from "../../common/input";
import { VALIDATION } from "../../utils/validationSchema";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage("data");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION.registerValidation) });

  const onSubmit = (data) => {
    setItem(data);
    navigate(MENU.LOGIN);
    reset();
  };

  return (
    <S.RegisterComponent>
      <S.RegisterForm
        className="registerForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          placeholder="first-name"
          register={register("firstName")}
          error={errors?.firstName?.message}
        />
        <Input
          type="text"
          placeholder="last-name"
          register={register("lastName")}
          errors={errors?.lastName?.message}
        />
        <Input
          type="text"
          placeholder="email"
          register={register("email")}
          errors={errors?.email?.message}
        />
        <Input
          type="password"
          placeholder="password"
          register={register("password")}
        />
        <Input
          type="password"
          placeholder="confirm-password"
          register={register("confirmPassword")}
        />

        <Button text="Registration" />
      </S.RegisterForm>
    </S.RegisterComponent>
  );
};
