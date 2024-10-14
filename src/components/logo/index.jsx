import { useNavigate } from "react-router-dom";
import s from "./logo.module.scss";
import logo from "../../assets/images/logo.jpg";




const Logo = () => {

    const navigate = useNavigate()

    const handelClick = () => {
        navigate("/")
    }
    return(
        <div className={s.logo} onClick={handelClick}>
            <img src={logo}alt="" />
        </div>
    )
}
export default Logo