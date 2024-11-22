import { menuList } from "../menuList";
import { IMAGES } from "../../assets/images";
import * as S from "./styled";

const Header = () => {
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

export default Header;
