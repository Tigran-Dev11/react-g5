import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

const Home = () => {
  return (
    <div>
      <NavLink to={ROUTES.register}>REGISTER</NavLink>
      <br />
      <NavLink to={ROUTES.login}>lOGIN</NavLink>
    </div>
  );
};

export default Home;
