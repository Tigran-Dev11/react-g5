import s from "./links.module.scss";
import { NavLink } from "react-router-dom";

const Links = ({ linksArray }) => {
  return (
    <div>
      {linksArray?.map((link) => (
        <NavLink
          key={link.id ? link.id : link.path}
          className={link.icon ? s.link : s.menu}
          to={link.href ? link.href : link.path}
        >
          {link.icon ? link.icon : link.title}
        </NavLink>
      ))}
    </div>
  );
};
export default Links;
