import { InfoComponent } from "../portfolioComponent/infoComponent";
import { IMAGES } from "../../assets/images";
import { VideoComponent } from "./videoComponent";
import { Info } from "./Info";
import * as S from "./styled";
import { CardComponent } from "./cardComponent";

export const PortfolioComponent = () => {
  
  const contact = [
    {
      title: "Viezh Robot",
      location: "Warsaw, Poland",
      image: IMAGES.robert,
      grade: "4.5",
      icon: IMAGES.icon,
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      title: "Yessica Christy",
      location: "Shanxi, China",
      image: IMAGES.yessica,
      grade: "4.5",
      icon: IMAGES.icon,
      subTitle: "Lorem Ipsum is simply dummy text of the printing and ",
    },
    {
      title: "Kim Young Jou",
      location: "Seoul, South Korea",
      image: IMAGES.kim,
      grade: "4.5",
      icon: IMAGES.icon,
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const banner = [
    {
      title: `90+`,
      subTitle: `Clients`,
      image: IMAGES.user,
    },
    {
      title: `30+`,
      subTitle: `Countries`,
      image: IMAGES.location,
    },
    {
      title: `50+`,
      subTitle: `Projects`,
      image: IMAGES.server,
    },
  ];

  const info = [
    {
      title: `Lorem Ipsum is simply dummy 
text dummy text `,
      firstSubTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,,`,
      secondSubTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
      image: IMAGES.BoxImage,
    },
    {
      title: `Lorem Ipsum Is Simply Dummy 
Text Dummy Text `,
      firstSubTitle: `Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries,,`,
      secondSubTitle: `Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. `,
      image: IMAGES.BoxImage1,
    },
    {
      title: `lorem ipsum is simply dummy 
text dummy text `,
      firstSubTitle: `lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries,,`,
      secondSubTitle: `lorem ipsum is simply dummy text of the printing and typesetting industry. `,
      image: IMAGES.BoxImage2,
    },
  ];

  return (
    <div>
      <S.InfoComponent>
        <S.Title>Lorem Ipsum is simply dummy text of the printing and.</S.Title>
        <S.SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </S.SubTitle>

        <S.BannerPlace>
          {banner.map((item) => {
            return <InfoComponent item={item} />;
          })}
        </S.BannerPlace>
      </S.InfoComponent>

      <VideoComponent />
      {info.map((item) => {
        return <Info
        item={item}
       />;
      })};
      
      {contact.map((item)=>{
        return <CardComponent item={item}/>
      })}

    </div>
  );
};
