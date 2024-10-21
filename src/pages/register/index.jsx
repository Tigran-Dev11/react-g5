import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./register.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";
import { SCHEMAS } from "../../utils/validation-schemas";
import { Input } from "../../common/input";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Register = () => {
  const navigate = useNavigate();
   const { setItem } = useLocalStorage("data")



  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SCHEMAS.registerSchema) });



  const onSubmit = (data) => {
    setItem(data)
    navigate("/login");
    reset();
  };

  return (
    <div className={s.register}>
      <form  onSubmit={handleSubmit(onSubmit)} >
        <Input
          type="text"
          placeholder="first name"
          register={register("firstName")}
          error={errors?.firstName?.message}
        />

        <Input
          type="text"
          placeholder="last name"
          register={register("lastName")}
          error={errors?.lastName?.message}
        />

        <Input
          type="email"
          placeholder="email "
          register={register("email")}
          error={errors?.email?.message}
        />

        <Input
          type="password"
          placeholder="password"
          register={register("password")}
          error={errors?.password?.message}
        />

        <Input
          type="password"
          placeholder="confirm password"
          register={register("confirmPassword")}
          error={errors?.confirmPassword?.message}
        />

        <Input
          className={s.checkbox}
          type="checkbox"
          register={register("isActive")}
        />

        <p>Remember me</p>
        <Button text="Register" />
      </form>
    </div>
  );
};
export default Register;
