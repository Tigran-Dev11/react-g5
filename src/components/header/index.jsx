import { menus } from "../../utils/constants";
import "./style.css";

const Header = () => {
  return (
    <header className="header-container">
      <ul>
        {menus.map((item,i) => {
          return (
            <li key={`${item.name}-${i}`}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
