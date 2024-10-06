import { MENU } from "../menuLists/index";
import { Home } from "../webParts/home/index";
import { Login } from "../webParts/login/index";
import { Register } from "../webParts/register/index";
import { Contact } from "../webParts/contact/index";

export const router=[
    {
        path:MENU.HOME,
        component:Home,
    },

    {
        path:MENU.LOGIN,
        component:Login,
    },
    
    {
        path:MENU.REGISTRATION,
        component:Register,
    },
    
    {
        path:MENU.CONTACT,
        component:Contact,
    }
]