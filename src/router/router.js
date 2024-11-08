import { MENU } from "../utils/constant";
import { About } from "../pages/contact";
import { Home } from "../pages/home";
import {Login} from "../pages/login";
import {Register} from "../pages/register";
import { Counter } from "../pages/counter";

export const router = [
  {
    path: "/",
    component: Home,
  },

  {
    path: MENU.LOGIN,
    component: Login,
  },

  {
    path: MENU.REGISTRATION,
    component: Register,
  },

  {
    path: MENU.ABOUT,
    component: About,
  },
  {
    path:MENU.COUNT,
    component:Counter,
  },

];
