import s from "./login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMAS } from "../../utils/validation-schemas";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { ROUTES } from "../../utils/constant";
import { registerActions } from "../../libs/redux/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { registerSelector } from "../../libs/redux/registerSlice/selectors";

const Login = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(registerSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SCHEMAS.loginSchema) });
  const navigate = useNavigate();

  // erb login@ sxal e lracvum noric tanum e userInfo ej
  const onSubmit = (data) => {
    dispatch(registerActions.addLoginData(data));
    if (status) {
      navigate(ROUTES.userInfo);
      localStorage.clear();
    }
  };

  return (
    <div className={s.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email " {...register("email")} />
        <p>{errors?.email?.message}</p>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors?.password?.message}</p>
        <Button text="Login" />
      </form>
    </div>
  );
};
export default Login;
