import * as S from "./styled"

export const AboutComponent = ({item}) => {
  const { name, title, subTitle } = item;
  return (
    <S.AboutComponent>
      <S.Span>{name}</S.Span>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.AboutComponent>
  );
};
