import * as S from "./styled"
const Button = ({ click, text }) => {
  return <S.Button onClick={click}>{text}</S.Button>;
};
export default Button;


