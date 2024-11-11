import { InfoComponent } from "../portfolioComponent/infoComponent";
import { IMAGES } from "../../assets/images";
import { VideoComponent } from "./videoComponent";
import { Info } from "./Info";
import * as S from "./styled";

export const PortfolioComponent = () => {
  const banner = [
    {
      title: `90+`,
      subTitle: `Clients`,
    },
    {
      title: `30+`,
      subTitle: `Countries`,
    },
    {
      title: `50+`,
      subTitle: `Projects`,
    },
  ];

  const info = [
    {
      title: `Lorem Ipsum is simply dummy 
text dummy text `,
      firstSubTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,,`,
      secondSubTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
      image: `src={IMAGES.BoxImage},`,
    },
    {
      title: `Lorem Ipsum Is Simply Dummy 
Text Dummy Text `,
      firstSubTitle: `Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries,,`,
      secondSubTitle: `Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. `,
    },
    {
      title: `lorem ipsum is simply dummy 
text dummy text `,
      firstSubTitle: `lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries,,`,
      secondSubTitle: `lorem ipsum is simply dummy text of the printing and typesetting industry. `,
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
          <InfoComponent
            title={banner[0].title}
            subTitle={banner[0].subTitle}
          />
          <InfoComponent
            title={banner[1].title}
            subTitle={banner[1].subTitle}
          />
          <InfoComponent
            title={banner[2].title}
            subTitle={banner[2].subTitle}
          />
        </S.BannerPlace>
      </S.InfoComponent>

      <VideoComponent/>

      <Info
        title={info[0].title}
        firstSubTitle={info[0].firstSubTitle}
        secondSubTitle={info[0].secondSubTitle}
      />
      <Info
        title={info[1].title}
        firstSubTitle={info[1].firstSubTitle}
        secondSubTitle={info[1].secondSubTitle}
      />
      <Info
        title={info[2].title}
        firstSubTitle={info[2].firstSubTitle}
        secondSubTitle={info[2].secondSubTitle}
      />
    </div>
  );
};
