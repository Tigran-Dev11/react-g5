import { IMAGES } from "../../../assets/images";
import * as S from "./styled";

export const BannerComponent = () => {
  return (
    <S.Banner>
      <S.Image src={IMAGES.BoxImage2} alt="BannerImage" />
      <S.InfoPlace>
        <S.SubTitle>Lorem ipsum</S.SubTitle>
        <S.Title>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </S.Title>
        <S.SecondSubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </S.SecondSubTitle>
      </S.InfoPlace>
    </S.Banner>
  );
};
