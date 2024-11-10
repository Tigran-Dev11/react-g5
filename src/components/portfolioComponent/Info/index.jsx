import Button from "../../../common/button";
import { IMAGES } from "../../../assets/images";
import * as S from "./styled"

export const Info = () => {
  return (
    <S.InfoBox>
      <S.InfoPart>
        <S.InfoBoxTitle>
          Lorem Ipsum is simply dummy text dummy text{" "}
        </S.InfoBoxTitle>
        <S.InfoBoxSubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </S.InfoBoxSubTitle>
        <S.InfoBoxSubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </S.InfoBoxSubTitle>
        <Button text="Road more" />
      </S.InfoPart>
      <S.ImagePart>
        <img src={IMAGES.BoxImage} alt="BoxImage" />
      </S.ImagePart>
    </S.InfoBox>
  );
};
