import { menuList } from "../../menuLists/index";
import {MENU} from "../../menuLists/index"
import logo from "../../webImages/HelloUI.png";
import { Logo } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="MENU.HOME">
        <img src={Logo} alt="logo"/>
      </NavLink>
      <ul>
        {menuList.map((item, i) => {
          return (
            <li key={`${item.name}-${i}`}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
