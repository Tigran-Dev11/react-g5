import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMAS } from "../../utils/validation-schema";
import "./style.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMAS.registerSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="first name"
          {...register("firstName")}
        />
        <p>{errors?.firstName?.message}</p>

        <input type="text" placeholder="last name" {...register("lastName")} />
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
        <p>{errors?.confirmPassword?.message}</p>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
