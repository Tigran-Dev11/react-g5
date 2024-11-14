import * as S from "./styled";
export const Input = ({ type, placeholder, error, register }) => {
  return (
    <S.CommonInput className="inputWrapper">
      <S.Input type={type} placeholder={placeholder} {...register} />
      {error ? <span>{error}</span> : null}
    </S.CommonInput>
  );
};

