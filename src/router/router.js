import { MENU } from "../components/menuLists";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Products } from "../pages/products";


export const router=[
    {
        path: "/",
        component:Home,
    },

    {
        path:MENU.LOGIN,
        component:Login,
    },
    
    {
        path:MENU.REGISTRATION,
        component :Register,
    },
    
    {
        path:MENU.ABOUT,
        component:About,
    },
    
    {

        path:MENU.PRODUCTS,
        component:Products,
    
    }
]
