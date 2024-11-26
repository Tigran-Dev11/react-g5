import { IMAGES } from "../../assets/images";
import { MENU } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import * as S from "./styled";

export const Header = () => {
  const menus = [
    {
      id: 1,
      title: "Home",
      path: MENU.home,
    },
    {
      id: 2,
      title: "Login",
      path: MENU.login,
    },
    {
      id: 3,
      title: "Register",
      path: MENU.register,
    },
    {
      id:4,
      title:"Products",
      path:MENU.products
    }
  ];

  return (
    <S.Header>
      <NavLink to={MENU.home}>
        <S.Image src={IMAGES.logo} alt="Logo" />
      </NavLink>
      <S.HeaderMenu>
        {menus.map((menu) => {
          return (
            <S.MenuList key={menu.id}>
              <NavLink to={menu.path}>{menu.title}</NavLink>
            </S.MenuList>
          );
        })}
      </S.HeaderMenu>
    </S.Header>
  );
};
