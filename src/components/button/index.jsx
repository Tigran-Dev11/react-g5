import s from "./button.module.scss"

export const Button = ({ click, text, className }) => {
  return <button className={`${s.button} ${className}`} onClick={click}>{text}</button>;
};
