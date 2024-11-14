import s from "./header.module.scss";
import { menuLinks } from "../../utils/constant";
import { NavLink, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { ROUTES } from "../../utils/constant";

const Header = () => {
  const navigate = useNavigate()
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
          <HiShoppingCart onClick={()=>navigate(ROUTES.basket)}/>
        </div>
      </div>
    </div>
  );
};
export default Header;
