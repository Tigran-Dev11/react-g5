import { useNavigate } from "react-router-dom";
import s from "./logo.module.scss";





const Logo = () => {

    const navigate = useNavigate()

    const handelClick = () => {
        navigate("/")
    }
    return(
        <div className={s.logo} onClick={handelClick}>Logo</div>
    )
}
export default Logo