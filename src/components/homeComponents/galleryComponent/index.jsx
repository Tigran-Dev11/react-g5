import { Gallery } from "./galery";
import { IMAGES } from "../../../assets/images";
import Button from "../../../common/button";
import * as S from "./styled"

export const GalleryComponent = () => {
  const galleryInfo = [
    {
      image: IMAGES.BoxImage3,
      icon: IMAGES.topIcon,
      title: "40 Followers",
    },
    {
      image: IMAGES.BoxImage,
      icon: IMAGES.topIcon,
      title: "40 Followers",
    },
    {
      image: IMAGES.BoxImage2,
      icon: IMAGES.topIcon,
      title: "40 Followers",
    },
    {
      image: IMAGES.BoxImage1,
      icon: IMAGES.topIcon,
      title: "40 Followers",
    },
  ];

  return (
    <S.GalleryPlace>
      <S.GalleryTop>
        <S.Title>Currently Trending Games</S.Title>
        <Button text="SEE ALL" />
      </S.GalleryTop>
      <div>
        {galleryInfo.map((item) => {
          return <Gallery item={item} />;
        })}
      </div>
    </S.GalleryPlace>
  );
};
