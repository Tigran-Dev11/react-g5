import { MENU } from "../utils/constant";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Products } from "../pages/products";

export const router = [
  {
    path: "/",
    component: Home,
  },

  {
    path: MENU.login,
    component: Login,
  },

  {
    path: MENU.register,
    component: Register,
  },

  {
    path: MENU.products,
    component: Products,
  },

];
