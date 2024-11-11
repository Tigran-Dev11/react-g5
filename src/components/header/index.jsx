import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import { menuList } from "../menu.list";
import {IMAGES} from "../../assets/images"
import * as S from "./styled"

export const Header = () => {
  return (
    <S.HeaderComponent>
      <S.HeaderNavLink href="about">
        <S.HeaderImage src={IMAGES.logo} alt="MyPhoto" />
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
  );
};
