import { NavLink } from "react-router-dom";
import { menus } from "../../utils/constants";
import * as S from "./styled"
import { useState } from "react";


const Header = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <S.HeaderContainer isActive={isActive}>
  
      <S.HeaderLinksWrapper>
      {menus.map((item,i) => {
          return (
            <S.HeaderLink key={`${item.title}-${i}`}>
              <NavLink href={item.path}>{item.title}</NavLink>
            </S.HeaderLink>
          );
        })}
      </S.HeaderLinksWrapper>
    </S.HeaderContainer>




    // <header className="header-container">
    //   <ul>
    //     {menus.map((item,i) => {
    //       return (
    //         <li key={`${item.name}-${i}`}>
    //           <a href={item.href}>{item.name}</a>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </header>
  );
};

export default Header;
