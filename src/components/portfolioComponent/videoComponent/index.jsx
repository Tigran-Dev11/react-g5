import { IMAGES } from "../../../assets/images";
import { CheckComponent } from "./infoComponent";
import * as S from "./styled";

export const VideoComponent = () => {
   const check = [
     {
       subTitle: `Lorem Ipsum is simply`,
       image: IMAGES.check,
     },
     {
       subTitle: `Lorem Ipsum is simply`,
       image: IMAGES.check,
     },
     {
       subTitle: `Lorem Ipsum is simply`,
       image: IMAGES.check,
     },
     {
       subTitle: `Lorem Ipsum is simply`,
       image: IMAGES.check,
     },
   ];
  
  return (
    <div>
      <S.VideoComponentDiv>
        <S.VideoDiv>
          <iframe
            width="460"
            height="420"
            src="https://www.youtube.com/embed/Ey35W1EEvrQ?si=v-XBwcduaIG4MJHg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </S.VideoDiv>

        <S.InfoDiv>
          <S.Title>Lorem Ipsum is simply dummy text.</S.Title>
          <S.SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </S.SubTitle>
          {check.map((item) => {
            return <CheckComponent item={item} />;
          })}
        </S.InfoDiv>
      </S.VideoComponentDiv>
    </div>
  );
};
