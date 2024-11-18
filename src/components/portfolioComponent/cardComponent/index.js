import * as S from "./styled"

export const CardComponent = ({ item }) => {
  const { title, location, grade, icon, image, subTitle } = item;
  return (
    <S.CardInfo>
      <S.InfoPlace>
        <S.Image src={image} alt="info-Portrait" />
        <S.UserInfo>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{location}</S.SubTitle>
        </S.UserInfo>
        <S.Title>{grade}</S.Title>
        <S.Image src={icon} alt="icon-star" />
      </S.InfoPlace>
      <S.SubTitlePlace>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.SubTitlePlace>
    </S.CardInfo>
  );
};

