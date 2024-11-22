import { IMAGES } from "../../../assets/images";
import Button from "../../../common/button";
import * as S from "./styled"

export const ProduceComponent = () => {
    return (
      <S.ProducePlace>
        <S.InfoProducePlace>
          <S.FavSubTitle>3D game Dev </S.FavSubTitle>
          <S.Title>Work that we produce for our clients</S.Title>
          <S.SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </S.SubTitle>
          <Button text="Get more details" />
        </S.InfoProducePlace>
        <S.IconsPlace>
          <S.PositionalImage1 src={IMAGES.unity} alt="Unity" />
          <S.PositionalImage2 src={IMAGES.cryEngine} alt="CryEngine" />
          <S.PositionalImage3 src={IMAGES.unReal} alt="UnReal" />
        </S.IconsPlace>
      </S.ProducePlace>
    );
};

