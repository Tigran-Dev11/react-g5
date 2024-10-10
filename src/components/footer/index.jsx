import Links from "../links";
import Logo from "../logo";
import { socialLinks } from "../../utils/constant"
import s from "./footer.module.scss";


const Footer = () => {
    return(
        <footer>
          <Logo/>
          <Links socialLinks={socialLinks}/>
        </footer>
    )
}
export default Footer