import s  from "./button.module.scss";


const Button = ({click, text}) => {
    return(
        <button onClick={click}>{text}</button >
    )
}
export default Button;