import { IMAGES } from "../../../assets/images";
import * as S from "./styled";

export const InformationLinks = () => {

    return (
      <div>
        <S.Footer>
          <S.Info>
            <S.Image src={IMAGES.logo} alt="Logo" />
            <S.Title>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </S.Title>
            <S.SubTitle>@Lorem</S.SubTitle>
          </S.Info>
          <S.Links>
            <S.SubTitle>About us</S.SubTitle>
            <S.SubTitle>Zeux</S.SubTitle>
            <S.SubTitle>Portfolio</S.SubTitle>
            <S.SubTitle>Careers</S.SubTitle>
            <S.SubTitle>Contact us</S.SubTitle>
          </S.Links>
          <S.Contact>
            <S.SubTitle>Contact us</S.SubTitle>
            <S.SpecSubTitle>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </S.SpecSubTitle>
            <S.SubTitle>+908 89097 890</S.SubTitle>
          </S.Contact>
        </S.Footer>
      </div>
    );
};
