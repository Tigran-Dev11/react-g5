import * as S from "./styled"

export const AboutComponent = (item) => {
  const { name, title, subTitle } = item;
  return (
    <S.AboutComponent>
      <span>{name}</span>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </S.AboutComponent>
  );
};
