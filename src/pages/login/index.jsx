import { useForm } from "react-hook-form";
import { Input } from "../../common/input";
import s from "./login.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMAS } from "../../utils/validation-schema";

const Login = () => {

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMAS.loginSchema),
  });

  const onSubmit = (data) => {

    reset()
  };

  const AddDefaultEmail = () => {
    setValue("email", "default@example.com");
  };

  return (
    <div className={s.loginFormContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
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
        <button>login</button>
      </form>

      <button onClick={AddDefaultEmail}>ADD DEFAULT EMAIL</button>
    </div>
  );
};

export default Login;
