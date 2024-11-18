import * as S from "./styled"

export const NewComponent=({item})=>{
    const {image, name, time, title}=item

    return(
        <S.NewPlace>
            <S.Image src={image} alt="News" />
            <S.InfoPlace>
                <S.Info>
                    <S.Span>{name}</S.Span>
                    <S.SubTitle>{time}</S.SubTitle>
                </S.Info>
                <S.Title>{title}</S.Title>
            </S.InfoPlace>

        </S.NewPlace>

    )
}