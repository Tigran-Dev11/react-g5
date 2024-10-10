import s from "./links.module.scss";
import { Link, NavLink } from "react-router-dom";



const Links = (props) => {
    return(
        <div>
            {
                props.socialLinks?.map(link => 
                    <Link key={link.id} className={s.link} to={link.href}>{link.icon}</  Link>)
            }
          <ul>
            {
                props.menuLinks?.map(link => <li key={link.title}>
                    <NavLink to={link.path}>{link.title}</NavLink>
                </li>)
            }
          </ul>
        </div>
        
    )
}
export default Links;