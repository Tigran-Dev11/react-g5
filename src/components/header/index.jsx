import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import s from "./header.module.scss";
import { IMAGES } from "../../assets/images";
import { useGlobalContext } from "../../hooks/use-global-context";

const Header = () => {
  const { open } = useGlobalContext();
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
      {open ? (
        <ul>
          {menus.map((menu) => (
            <li key={menu.title}>
              <NavLink to={menu.path}>{menu.title}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
};

export default Header;
