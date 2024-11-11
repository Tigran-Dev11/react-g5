import { InfoComponent } from "./infoComponent";
import * as S from "./styled";

export const VideoComponent = () => {
  return (
    <div>
      <S.VideoComponentDiv>
        <S.VideoPlace>
          <video width="670px" height="355px" controls="controls">
            <source
              src="https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/
              Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4"
              type="video/mp4"
            />
          </video>
        </S.VideoPlace>
        <S.InfoDiv>
          <S.Title>Lorem Ipsum is simply dummy text.</S.Title>
          <S.SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </S.SubTitle>
          <S.InfoComponent>
            <InfoComponent />
            <InfoComponent />
            <InfoComponent />
            <InfoComponent />
          </S.InfoComponent>
        </S.InfoDiv>
      </S.VideoComponentDiv>
    </div>
  );
};
