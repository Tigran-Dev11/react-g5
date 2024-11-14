import { ProduceComponent } from "./produceComponent";
import { GalleryComponent } from "./galleryComponent";
import { OtherInfoComponent } from "./otherInfoComponent";
import { IMAGES } from "../../assets/images";
import { ShopComponent } from "./shopComponent";
import * as S from "./styled";

export const HomeComponent = () => {
  
  const ShopInfo = [
    {
      image: IMAGES.phone,
      subTitle: "Mobile Game Development",
      icon: IMAGES.selector,
    },
    {
      image: IMAGES.computer,
      subTitle: "PC Game Development",
      icon: IMAGES.selector,
    },
    {
      image: IMAGES.playStation,
      subTitle: "PS4 Game Development",
      icon: IMAGES.selector,
    },
    {
      image: IMAGES.glasses,
      subTitle: "AR/VR Solutions",
      icon: IMAGES.selector,
    },
    {
      image: IMAGES.desktop,
      subTitle: "AR/ VR design",
      icon: IMAGES.selector,
    },
    {
      image: IMAGES.vector,
      subTitle: "3D Modelings",
      icon: IMAGES.selector,
    },
  ];

  return (
    <S.Home>
      <ProduceComponent />
      <GalleryComponent />
      <OtherInfoComponent />
      <S.ShopPlace>
        <S.Title>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </S.Title>
        <S.SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </S.SubTitle>
      </S.ShopPlace>
      {ShopInfo.map=((item)=>{
        <ShopComponent item={item}/>
      })}
    </S.Home>
  );
};

