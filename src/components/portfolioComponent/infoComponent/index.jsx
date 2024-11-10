import { IMAGES } from "../../../assets/images";
import * as S from "./styled"

export const InfoComponent = () => {
  return (
    <S.InfoComponent>
      <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <S.InfoPlace className="infoPlace">
        <div>
          <img src={IMAGES.user} alt="User" />
          <S.InfoPlaceTitle>90+</S.InfoPlaceTitle>
          <S.InfoSubTitle>Clients</S.InfoSubTitle>
        </div>
        <div>
          <img src={IMAGES.location} alt="Location" />
          <S.InfoPlaceTitle>30+</S.InfoPlaceTitle>
          <S.InfoSubTitle>Countries</S.InfoSubTitle>
        </div>
        <div>
          <img src={IMAGES.server} alt="Server" />
          <S.InfoPlaceTitle>50+</S.InfoPlaceTitle>
          <S.InfoSubTitle>Projects</S.InfoSubTitle>
        </div>
      </S.InfoPlace>
    </S.InfoComponent>
  );
};
