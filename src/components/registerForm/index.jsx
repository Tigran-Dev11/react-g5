import * as S from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MENU } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";
import { Input } from "../../common/input";
import { VALIDATION } from "../../utils/validationSchema";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const RegisterForm = () => {
  const { setItem } = useLocalStorage("data");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VALIDATION.registerValidation) });

  const onSubmit = (data) => {
    setItem(data);
    console.log(data);
    navigate(MENU.LOGIN);
  };

  console.log(errors);
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
          placeholder="first-name"
          register={register("lastName")}
          errors={errors?.lastName?.message}
        />
        <Input
          type="text"
          placeholder="first-name"
          register={register("email")}
          errors={errors?.email?.message}
        />
        <Input
          type="text"
          placeholder="first-name"
          register={register("password")}
        />
        <Input
          type="text"
          placeholder="first-name"
          register={register("confirmPassword")}
        />

        <Button text="Registration" />
      </S.RegisterForm>
    </S.RegisterComponent>
  );
};
