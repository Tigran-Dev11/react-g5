import * as S from "./styled"
export const AboutTeam=({item})=>{
    const {image, title, subTitle}=item

    return(
        <S.AboutTeam>
            <S.Image src={image} alt="PersonImage" />
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subTitle}</S.SubTitle>

        </S.AboutTeam>

    )
} 