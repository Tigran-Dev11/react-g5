import Links from "../links";
import Logo from "../logo";
import { socialLinks } from "../../utils/constant";
import s from "./footer.module.scss";

const Footer = () => {
    return(
        <footer className={s.footer}>
          <Logo/>
          <Links linksArray={socialLinks}/>
        </footer>
    )
}
export default Footer
