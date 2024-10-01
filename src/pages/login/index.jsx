import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

const Login = () => {
  return (
    <div>
      <NavLink to={ROUTES.register}>REGISTER</NavLink>
    </div>
  );
};

export default Login;
