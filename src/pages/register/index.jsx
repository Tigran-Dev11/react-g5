import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMAS } from "../../utils/validation-schema";
import "./style.css";
import { useGlobalContext } from "../../hooks/use-global-context";

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

  const { open, setOpen } =  useGlobalContext();

  const openMenu = () => {
    setOpen(true);
  };

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
      <button onClick={openMenu}>open menu</button>

      {open ? (
        <div>
          <ul>
            <li>Home</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
