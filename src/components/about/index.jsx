import { IMAGES } from "../../assets/images";
import Button from "../../common/button";
import { AboutComponent } from "./aboutWorkersComponent";
import * as S from "./styled";

export const Info = () => {

  const aboutWorkers = [
    {
      name: "Lorem Ipsum",
      title: "Lorem Ipsum",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      name: "Lorem Ipsum",
      title: "Lorem Ipsum",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      name: "Lorem Ipsum",
      title: "Lorem Ipsum",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  return (
    <S.AboutPageContainer>
      <S.InfoPlace>
        <S.AboutPageTitle>
          Lorem Ipsum is simply dummy text of the printing and.
        </S.AboutPageTitle>

        <S.AboutPageSubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </S.AboutPageSubTitle>
        <Button text={"Get in touch"} />
      </S.InfoPlace>

      <S.ImagePlace>
        <S.AboutPageImage src={IMAGES.BoxImage} alt="MyPhoto" />
      </S.ImagePlace>
      <h1>Why work with us</h1>
      {aboutWorkers.map((item)=>{
        return <AboutComponent item={item}/>
      })}
    </S.AboutPageContainer>
  );
};
