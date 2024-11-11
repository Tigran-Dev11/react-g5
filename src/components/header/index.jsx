import s from "./header.module.scss";
import { menuLinks } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <div className={s.header}>
      <h3>SUPINE</h3>
      <div className={s.linkWrapper}>
        {menuLinks.map((link) => (
          <NavLink className={s.link} key={link.path} to={link.path}>
            {link.title}
          </NavLink>
        ))}
        <div className={s.basket}>
          <HiShoppingCart />
        </div>
      </div>
    </div>
  );
};
export default Header;
