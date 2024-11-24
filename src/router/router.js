import { Home } from "../pages/home";
import {Login} from "../pages/login";
import {Register} from "../pages/register"
import { MENU } from "../utils/constant";

export const router = [
  {
    path: MENU.home,
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
];