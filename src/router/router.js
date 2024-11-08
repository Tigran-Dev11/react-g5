import Home from "../pages/home";
import About from "../pages/about";
import Todos from "../pages/todos";
import { ROUTES } from "../utils/constant";

export const router = [
    {
        path: ROUTES.home,
        component: Home,
    },
    {
        path: ROUTES.about,
        component: About,
    },
    {
        path: ROUTES.todos,
        component: Todos,
    },

]