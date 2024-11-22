import * as S from "./styled"

export const AddItems=({item})=>{
    const {icon}=item
    return(
        <S.IconPlace>
            <S.Image src={icon} alt="Social Media Logo" />
        </S.IconPlace>
    )
}