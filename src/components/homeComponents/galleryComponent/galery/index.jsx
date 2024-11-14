import * as S from "./styled"

export const Gallery=({item})=>{
    const {image,icon,title}=item;

    return (
        <div>
            <img src={image} alt="GameImage"/>
            <S.BottomInfo>
                <img src={icon} alt="Free" />
                <S.Title>{title}</S.Title>
            </S.BottomInfo>

        </div>

    )
}