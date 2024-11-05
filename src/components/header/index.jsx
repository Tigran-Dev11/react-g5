import { menuList } from "../menuLists";
import { IMAGES } from "../../assets/Images";
import * as S from "./styled";
import { MENU } from "../../utils/constant";

const Header = () => {
  return (
    <S.HeaderComponent>
      <S.HeaderNavLink href={MENU.HOME}>
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
