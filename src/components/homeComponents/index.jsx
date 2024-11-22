import { IMAGES } from "../../assets/images";
import { ProduceComponent } from "./produceComponent";
import { GalleryComponent } from "./galleryComponent";
import { OtherInfoComponent } from "./otherInfoComponent";
import { ShopComponent } from "./shopComponent";
import { SearchComponent } from "../../common/searchComponent";
import * as S from "./styled";

export const HomeComponent = () => {
  const gameCenter = [
    {
      id: 1,
      image: IMAGES.gameCenter1,
    },
    {
      id: 2,
      image: IMAGES.gameCenter2,
    },
    {
      id: 3,
      image: IMAGES.gameCenter3,
    },

    {
      id: 4,
      image: IMAGES.gameCenter4,
    },
    {
      id: 5,
      image: IMAGES.gameCenter5,
    },
    {
      id: 6,
      image: IMAGES.gameCenter6,
    },
  ];

  const shopInfo = [
    {
      id: 1,
      image: IMAGES.phone,
      subTitle: "Mobile Game Development",
      icon: IMAGES.selector,
    },
    {
      id: 2,
      image: IMAGES.computer,
      subTitle: "PC Game Development",
      icon: IMAGES.selector,
    },
    {
      id: 3,
      image: IMAGES.playStation,
      subTitle: "PS4 Game Development",
      icon: IMAGES.selector,
    },
    {
      id: 4,
      image: IMAGES.glasses,
      subTitle: "AR/VR Solutions",
      icon: IMAGES.selector,
    },
    {
      id: 5,
      image: IMAGES.desktop,
      subTitle: "AR/ VR design",
      icon: IMAGES.selector,
    },
    {
      id: 6,
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
        <S.ShopBox>
          {shopInfo.map((item) => {
            return <ShopComponent item={item} key={item.id} />;
          })}
        </S.ShopBox>
      </S.ShopPlace>
      <S.Title>Our Recent Projects</S.Title>
      <S.SubTitle>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </S.SubTitle>

      <S.GalleryTop>
        {gameCenter.slice(0, 3).map((item) => {
          return (
            <div className="imagePlace" key={item.id}>
              <img src={item.image} alt="GameCenterImage" />
            </div>
          );
        })}
      </S.GalleryTop>

      <S.GalleryBottom>
        {gameCenter.slice(3, 6).map((item) => {
          return (
            <div className="imagePlace" key={item.id}>
              <img src={item.image} alt="GameCenterImage" />
            </div>
          );
        })}
      </S.GalleryBottom>

      <S.Button>SEE ALL</S.Button>

      <SearchComponent />
    </S.Home>
  );
};
