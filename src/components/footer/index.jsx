import { AddItems } from "./addItems";
import { InformationLinks } from "../footer/infoComponents";
import { IMAGES } from "../../assets/images";
import * as S from "./styled";

export const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: IMAGES.wfacebook,
    },
    {
      id: 2,
      icon: IMAGES.winstagram,
    },
    {
      id: 3,
      icon: IMAGES.wtwitter,
    },
    {
      id: 4,
      icon: IMAGES.wlinkedin,
    },
  ];

  return (
    <S.FooterComponent>
      <S.FooterTop>
        <InformationLinks />
        <S.IconsPlace>
          {icons.map((item) => {
            return <AddItems item={item} key={item.id} />;
          })}
        </S.IconsPlace>
      </S.FooterTop>
      <S.FooterBottom>
        <S.BottomSubTitle>Copyright ® 2021 Lorem All rights Rcerved</S.BottomSubTitle>
      </S.FooterBottom>
    </S.FooterComponent>
  );
};
