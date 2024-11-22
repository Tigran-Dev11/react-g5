import { IMAGES } from "../../../assets/images";
import * as S from "./styled";

export const OtherInfoComponent = () => {
  return (
    <div>
      <S.BannerInfo>
        <S.Title>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </S.Title>
        <S.Banner>
          <S.BannerTitle>Lorem Ipsum</S.BannerTitle>
          <S.SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </S.SubTitle>
          <S.ImageBolls src={IMAGES.bolls} alt="Bolls" />
          <S.BannerImage src={IMAGES.bannerImage} alt="BannerImage" />
        </S.Banner>
      </S.BannerInfo>
    </div>
  );
};
