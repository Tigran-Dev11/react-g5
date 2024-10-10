import "./header.module.scss";
import { menuLinks } from "../../utils/constant"
import Links from "../links";
import Logo from "../logo";

const Header = () => {
    
    return(
        <header>
            <Logo/>
            <Links menuLinks={menuLinks}/>
        </header>
    )
}
export default Header