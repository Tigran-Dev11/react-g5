import { IMAGES } from "../../assets/images";
import { IconComponent } from "./iconsUseComponent";
import { MessageCopmonent } from "./messageComponent";
import * as S from "./styled";

export const NewsComponent = () => {
  const icons = [
    {
      image: IMAGES.facebook,
    },
    {
      image: IMAGES.instagram,
    },
    {
      image: IMAGES.twitter,
    },
    {
      image: IMAGES.linkedin,
    },
  ];

  return (
    <div>
      <S.Title>Lorem Ipsum is simply dummy text of the printing and.</S.Title>
      <S.SubTitle>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </S.SubTitle>
      <S.Image src={IMAGES.map} alt="Location" />
      <S.ContactPlace>
        <S.ContactBox>
          <S.Icons>
            <S.SecondTitle>Follow Us</S.SecondTitle>
            <S.IconsPlace>
              {icons.map((item) => {
                return <IconComponent item={item} />;
              })}
            </S.IconsPlace>
          </S.Icons>
        </S.ContactBox>
        <S.ContactNumberPlace>
          <S.ImageIcon src={IMAGES.call} alt="ContactNumber" />
          <p>+94 4444 5555 6</p>
        </S.ContactNumberPlace>
        <S.LocationPlace>
          <S.ImageIcon src={IMAGES.locationIcon} alt="Location" />
          <p>but also the leap into electronic typesetting</p>
        </S.LocationPlace>
      </S.ContactPlace>
      <MessageCopmonent />
    </div>
  );
};
