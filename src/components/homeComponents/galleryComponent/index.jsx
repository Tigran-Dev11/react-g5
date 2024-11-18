
import { IMAGES } from "../../../assets/images";
import Button from "../../../common/button";
import * as S from "./styled";
import {Carousel} from '../../../common/slider'

export const GalleryComponent = () => {
  const galleryInfo = [
    {
      id: 1,
      image: IMAGES.BoxImage3,
      icon: IMAGES.topIcon,
      title: "40 Followers",
    },
    {
      id: 2,
      image: IMAGES.BoxImage,
      icon: IMAGES.topIcon,
      title: "40 Followers",
    },
    {
      id: 3,
      image: IMAGES.BoxImage2,
      icon: IMAGES.topIcon,
      title: "40 Followers",
    },
    {
      id: 4,
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
      <Carousel items={galleryInfo}/>
    </S.GalleryPlace>
  );
};
