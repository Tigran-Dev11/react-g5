import { menuList } from "../../menuLists/index";
import { links } from "../../links/links";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
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
