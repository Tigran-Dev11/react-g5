import s from "./button.module.scss";

const Button = ({ click, text, className }) => {
  return <button className={`${s.button} className`} onClick={click}>{text}</button>;
};
export default Button;
