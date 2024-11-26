import * as S from "./styled"

export const Button=(({text,click})=>{
    return <S.Button onClick={click}>{text}</S.Button>
})