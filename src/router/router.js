import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import { ROUTES } from "../utils/constant";

export const router = [
  {
    path: ROUTES.home,
    component: Home,
  },
  {
    path: ROUTES.contact,
    component: Contact,
  },
  {
    path: ROUTES.login,
    component: Login,
  },
  {
    path: ROUTES.register,
    component: Register,
  },
];
