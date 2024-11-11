
import { MENU } from "../components/menuLists";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Products } from "../pages/products";
import { Product } from "../pages/product";



export const router = [
    {
        path:"/",
        component:Home,
    },
    {
        path:MENU.ABOUT,
        component:About,
    },
    {
        path:MENU.LOGIN,
        component:Login,
    },
    {
        path:MENU.REGISTER,
        component:Register,
    },
   
    {
        path:MENU.PRODUCTS,
        component:Products,
    },
]