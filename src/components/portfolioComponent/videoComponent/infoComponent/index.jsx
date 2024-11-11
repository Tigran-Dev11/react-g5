import { IMAGES } from "../../../../assets/images"
import * as S from "./styled"

export const InfoComponent=()=>{
    return (
      <S.InfoDiv>
        <img src={IMAGES.check} alt="Check" />
        <S.SubTitle>Lorem Ipsum is simply</S.SubTitle>
      </S.InfoDiv>
    );

}