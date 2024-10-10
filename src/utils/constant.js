import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";
import { IoMdMailUnread } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";


export const ROUTES = {
    home: "/",
    about: "/about",
    contact: "/contact",
    products: "/products"
};

export const menuLinks = [
    {
        title: "Home",
        path:ROUTES.home
    },
    {
        title: "About",
        path:ROUTES.about
    },
    {
        title: "Contact",
        path:ROUTES.contact
    },
    {
        title: "Products",
        path:ROUTES.products
    }
]

export  const socialLinks = [
    {
        id:1,
        href: "#",
        icon: <FaFacebookSquare />
    },
    {
        id:2,
        href: "#",
        icon: <FaSquareInstagram />
    },
    {
        id:3,
        href: "#",
        icon: <TbBrandGmail />
    },
    {
        id:4,
        href: "#",
        icon: <IoMdMailUnread />
    },
    {
        id:5,
        href: "#",
        icon: <IoShareSocial />
    },
]