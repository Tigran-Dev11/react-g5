import { NavLink } from "react-router-dom";
import "./style.css";
import { router } from "../../router/router";

const Links = () => {
  return (
    <div className="links_wrapper">
      {router.map((el) => {
        return (
          <NavLink key={el.path} to={el.path}>
            {el.component}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Links;
