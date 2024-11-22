
import { ROUTES } from "../utils/constant";
import Home from "../pages/home";
import Collections from "../pages/collections";
import NotFound from "../pages/notFound";
import SingleProd from "../pages/singleProd";
import Basket from "../pages/basket";
import Register from "../pages/register";
import Login from "../pages/login";
import UserInfo from "../pages/userInfo";


export const router = [
    {
        path:ROUTES.home,
        component: Home
    },
    {
        path:ROUTES.basket,
        component: Basket
    },
    {
        path:ROUTES.singleProduct,
        component: SingleProd
    },
    {
        path:ROUTES.collections,
        component: Collections
    },

    {
        path:"*",
        component: NotFound
    },
    {
        path:ROUTES.register,
        component: Register
    },
    {
        path:ROUTES.login,
        component: Login
    },
    {
        path:ROUTES.userInfo,
        component: UserInfo
    },
]


