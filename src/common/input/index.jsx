import * as S from "./styled"

export const Input=({type, placeholder, error, register, ...rest })=>{
    return (
        <S.InputCommon>
            <S.Input 
            type={type} 
            placeholder={placeholder} 
            {...register} 
            {...error} />

            {error ? <S.Span> {error} </S.Span> : null}
        </S.InputCommon>
    );
};