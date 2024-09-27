import { menus } from "../../utils/constants";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <ul>
        {menus.map((item,i) => {
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
