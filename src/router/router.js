import { MENU } from "../components/menuLists";
import { Contact } from "../pages/contact";
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
        path:MENU.CONTACT,
        component:Contact,
    },
    
    {

        path:MENU.PRODUCTS,
        component:Products,
    
    }
]
