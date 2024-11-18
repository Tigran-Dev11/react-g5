import * as S from "./styled"

export const GameCenter=({item})=>{
    const{image, miniImage}=item
    return (
      <S.ImagePlace>
        <S.Image src={image} alt="GameCenterImage" />
        <S.MiniImage src={miniImage} alt="GameCenterImage" />
      </S.ImagePlace>
    );
}

