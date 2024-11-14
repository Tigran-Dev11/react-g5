import * as S from "./styled";

export const InfoComponent = (props) => {
  const { item } = props;

  const { title, subTitle, image } = item;

  return (
    <div>
      <S.Image src={image} alt="User" />
      <S.InfoPlaceTitle>{title}</S.InfoPlaceTitle>
      <S.InfoSubTitle>{subTitle}</S.InfoSubTitle>
      
    </div>
  );
};
