import { menuList } from "../menuLists";
// import {MENU} from "../../utils/constant"
import { IMAGES } from "../../assets/Images";
// import { NavLink } from "react-router-dom";
import * as S from "./styled";

const Header = () => {
  return (
    <S.HeaderComponent>
      <S.HeaderNavLink href="about">
        <S.HeaderImage src={IMAGES.favIcon} alt="MyPhoto" />
      </S.HeaderNavLink>
      <S.HeaderMenu>
        {menuList.map((item, i) => {
          return (
            <S.HeaderMenuList key={`${item.name}-${i}`}>
              <S.HeaderNavLink href={item.href}>{item.name}</S.HeaderNavLink>
            </S.HeaderMenuList>
          );
        })}
      </S.HeaderMenu>
    </S.HeaderComponent>

    // <div className="header">
    //   <NavLink to={MENU.HOME}>
    //     <img src={logo} alt="logo"/>
    //   </NavLink>
    //   <ul>
    //     {menuList.map((item, i) => {
    //       return (
    //         <li key={`${item.name}-${i}`}>
    //           <NavLink to={item.href}>{item.name}</NavLink>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
};

export default Header;
