import Links from "../links/links";
import "./style.css";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <span>Architecture</span>
                <span>Made With</span>
                <span><FaRegHeart /></span>
            </div>
            <Links/>
        </header>
    )
}
export default Header;