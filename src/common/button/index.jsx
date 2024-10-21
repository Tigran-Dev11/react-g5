import * as S from "./styled";

const Button = ({ text, click }) => {
  return <S.ButtonStyled onClick={click}>{text}</S.ButtonStyled>;
};

export default Button;
