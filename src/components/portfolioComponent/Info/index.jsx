import Button from "../../../common/button";
import { IMAGES } from "../../../assets/images";
import * as S from "./styled"

export const Info = (props) => {
  return (
    <S.InfoBox>
      <S.InfoPart>
        <S.InfoBoxTitle>{props.title}</S.InfoBoxTitle>
        <S.InfoBoxSubTitle>{props.firstSubTitle}</S.InfoBoxSubTitle>
        <S.InfoBoxSubTitle>{props.secondSubTitle}</S.InfoBoxSubTitle>
        <Button text="Road more" />
      </S.InfoPart>
      <S.ImagePart>{props.image}</S.ImagePart>
    </S.InfoBox>
  );
};
