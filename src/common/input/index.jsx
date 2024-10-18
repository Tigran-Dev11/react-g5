import s from "./input.module.scss";

const Input = ({type, placeholder}) => {
    return(
        <input type={type}  placeholder={placeholder}/>
    )
}


export default  Input;