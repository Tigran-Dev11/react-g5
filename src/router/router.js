import { ROUTES } from "../utils/constant";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Products from "../pages/products";
import NotFound from "../pages/notFound";
import Product from "../pages/product";
import Register from "../pages/register";
import Login from "../pages/login";

export const router = [
    {
        path:ROUTES.home,
        component:Home,
    },
    {
        path:ROUTES.contact,
        component:Contact,
    },
    {
        path:ROUTES.about,
        component:About,
    },
    {
        path:ROUTES.products,
        component:Products,
    },
    {
        path:ROUTES.product,
        component: Product,
    },
    {
        path:"*",
        component:NotFound,
    },
    {
        path:ROUTES.register,
        component:Register,
    },
    {
        path:ROUTES.login,
        component:Login,
    },
]