import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import s from "./header.module.scss";
import { IMAGES } from "../../assets/images";

const Header = () => {
  const menus = [
    {
      title: "Home",
      path: ROUTES.home,
    },
    {
      title: "Contact",
      path: ROUTES.contact,
    },
    {
      title: "Login",
      path: ROUTES.login,
    },
    {
      title: "Register",
      path: ROUTES.register,
    },
  ];

  return (
    <header className={s.Header}>
      <NavLink>
        <img src={IMAGES.logo} alt="log" className={s.logo} />
      </NavLink>
      <ul>
        {menus.map((menu) => (
          <li key={menu.title}>
            <NavLink to={menu.path}>{menu.title}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
