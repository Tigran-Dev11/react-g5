import * as S from "./styled"

export const GameCenter=({item})=>{
    const{image}=item
    return (
      <S.ImagePlace>
        <S.Image src={image} alt="GameCenterImage" />
      </S.ImagePlace>
    );
}

