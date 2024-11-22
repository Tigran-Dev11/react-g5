
import { NavLink } from "react-router-dom";
import * as S from "./styled" 

export const ShopComponent = ({item}) => {
    const {image, subTitle, icon}=item
    return( 
  <S.ShopPlace>
    <S.Image src={image} alt="productImage"/>
    <S.SubTitle>{subTitle}</S.SubTitle>
    <NavLink to={"#"} ><S.Icon src={icon} alt="Select" /></NavLink>    
  </S.ShopPlace>
    );
};

