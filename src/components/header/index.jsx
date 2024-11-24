import { MENU } from "../../utils/constant";
import { menuList } from "../menuLists";
import { IMAGES } from "../../assets/images";
import * as S from "./styled";

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderNavLink href={MENU.HOME}>
        <S.Image src={IMAGES.logo} alt="" />
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
    </S.Header>
  );
};
