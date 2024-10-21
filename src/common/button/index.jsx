import s from "./button.module.scss";

const Button = ({ click, text }) => {
  return <button className={s.button} onClick={click}>{text}</button>;
};
export default Button;
