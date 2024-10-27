import "./style.css"
import * as S from './styled'

export const Loading = () => {
  return (
    <S.LoaderWrapper >
      <div className="ball,balls1"></div>
      <div className="zahlaGorc">
        <div className="ballsPlace">
          <div className="ball,balls2"></div>
          <div className="ball,balls3"></div>
        </div>
        <div className="ballsPlace">
          <div className="ball balls4"></div>
          <div className="ball,balls5"></div>
        </div>
      </div>
      <div className="ball,balls6"></div>
    </S.LoaderWrapper>
  );
};
