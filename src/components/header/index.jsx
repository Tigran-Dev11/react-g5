import s from"./header.module.scss";
import { menuLinks, ROUTES } from "../../utils/constant";
import Links from "../links";
import Logo from "../logo";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
 const navigate = useNavigate()
  return (
    <header>
      <Logo />
      <Links linksArray={menuLinks} />
      <div className={s.basket}>
        <MdOutlineShoppingCart onClick={()=> navigate(ROUTES.basket)}/>
      </div>
    </header>
  );
};
export default Header;
