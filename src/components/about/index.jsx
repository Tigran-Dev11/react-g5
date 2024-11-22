import { IMAGES } from "../../assets/images";
import Button from "../../common/button";
import { AboutComponent } from "./aboutWorkersComponent";
import { BannerComponent } from "./bannerComponent";
import { AboutTeam } from "./AboutTeam";
import {SearchComponent} from "../../common/searchComponent"
import * as S from "./styled";

export const Info = () => {
  const workersInfo = [
    {
      id: 1,
      image: IMAGES.Bill,
      title: "John Peter",
      subTitle: "COO",
    },
    {
      id: 2,
      image: IMAGES.Beverly,
      title: "John Peter",
      subTitle: "COO",
    },
    {
      id: 3,
      image: IMAGES.Claudia,
      title: "John Peter",
      subTitle: "COO",
    },
    {
      id: 4,
      image: IMAGES.Avatar,
      title: "John Peter",
      subTitle: "COO",
    },
  ];

  const aboutWorkers = [
    {
      id: 1,
      name: "Lorem Ipsum",
      title: "Lorem Ipsum",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      title: "Lorem Ipsum",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      title: "Lorem Ipsum",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  return (
    <S.AboutPageContainer>
      <S.Section>
        <S.InfoPlace>
          <S.AboutPageTitle>
            Lorem Ipsum is simply dummy text of the printing and.
          </S.AboutPageTitle>

          <S.AboutPageSubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </S.AboutPageSubTitle>
          <Button text={"Get in touch"} />
        </S.InfoPlace>

        <S.ImagePlace>
          <S.AboutPageImage src={IMAGES.BoxImage} alt="MyPhoto" />
        </S.ImagePlace>
      </S.Section>

      <S.Title>Why work with us</S.Title>
      <S.AboutWorkers>
        {aboutWorkers.map((item) => {
          return <AboutComponent item={item} key={item.id} />;
        })}
      </S.AboutWorkers>

      <BannerComponent />
      <div>
        <S.TeamTitle>Our Team</S.TeamTitle>

        <S.AboutTeamPlace>
          {
            workersInfo.map((item)=>{
              return (
                <AboutTeam item={item} key={item.id} />
              )
            })
          }
        </S.AboutTeamPlace>
      </div>
      <SearchComponent />
    </S.AboutPageContainer>
  );
};
