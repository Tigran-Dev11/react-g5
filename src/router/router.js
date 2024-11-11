
import { ROUTES } from "../utils/constant";
import Home from "../pages/home";
import Collections from "../pages/collections";
import Accessories from "../pages/accessories";
import Men from "../pages/men";
import Women from "../pages/women";
import NotFound from "../pages/notFound";
import SingleProd from "../pages/singleProd";
import Basket from "../pages/basket";


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
        path:ROUTES.men,
        component: Men
    },
    {
        path:ROUTES.women,
        component: Women
    },
    {
        path:ROUTES.accessories,
        component: Accessories
    },
    {
        path:"*",
        component: NotFound
    },
    
]


