import { IMAGES } from "../../../assets/images";
import * as S from "./styled"

export const InfoComponent = (props) => {
  return (
        <div>
            <img src={IMAGES.user} alt="User" />
            <S.InfoPlaceTitle>{props.title}</S.InfoPlaceTitle>
            <S.InfoSubTitle>{props.subTitle}</S.InfoSubTitle>
        </div>
  );
};
