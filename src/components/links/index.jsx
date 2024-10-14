import s from "./links.module.scss";
import { NavLink } from "react-router-dom";

const Links = ({ linksArray }) => {
  return (
    <div>
      {linksArray.socialLinks?.map((link) => (
        <NavLink key={link.id} className={s.link} to={link.href}>
          {link.icon}
        </NavLink>
      ))}
      <ul></ul>
    </div>
  );
};
export default Links;
