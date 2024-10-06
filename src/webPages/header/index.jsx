import { menuList } from "../../menuLists/index";
import {MENU} from "../../menuLists/index"
import logo from "../../webImages/HelloUI.png";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <NavLink to={MENU.HOME}>
        <img src={logo} alt="logo"/>
      </NavLink>
      <ul>
        {menuList.map((item, i) => {
          return (
            <li key={`${item.name}-${i}`}>
              <NavLink to={item.href}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
