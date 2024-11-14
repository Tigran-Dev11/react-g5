import * as S from "./styled"

export const CheckComponent=({item})=>{

  const { subTitle, image } = item;

  return (
      <S.InfoDiv>
        <S.Image src={image} alt="Check" />
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.InfoDiv>
    );

}
