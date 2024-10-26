import Contact from "../pages/contact";
import Login from "../pages/login";
import Help from "../pages/help";
import Product from "../pages/product";
import Home from "../pages/home";
import About from "../pages/about";
import { ROUTES } from "../utils/constants";


export const router = [
    {
        path:ROUTES.HOME,
        Component:Home,
    },
    {
        path:ROUTES.CONTACT,
        Component:Contact,
    },
    {
        path:ROUTES.LOGIN,
        Component:Login,
    },
    {
        path:ROUTES.HELP,
        Component:Help,
    },
    {
        path:ROUTES.PRODUCT,
        Component:Product,
    },
    {
        path:ROUTES.ABOUT,
        Component:About,
    },
]