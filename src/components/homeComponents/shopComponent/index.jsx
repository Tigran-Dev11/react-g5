import { NavLink } from "react-router-dom";

export const ShopComponent = (item) => {
    const {image,subTitle,icon}=item
    return( 
  <div>
    <img src={image} alt="productImage"/>
    <p>{subTitle}</p>
    <NavLink to={""} ><img src={icon} alt="Select" /></NavLink>    
  </div>
    );
};
