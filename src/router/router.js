import { MENU } from "../utils/constant";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import {Login} from "../pages/login";
import {Register} from "../pages/register";
import{Portfolio} from "../pages/portfolio";
import {News} from "../pages/news";
import {Contact} from "../pages/contact";

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
    path: MENU.PORTFOLIO,
    component: Portfolio,
  },
  {
    path: MENU.NEWS,
    component: News,
  },
  {
    path: MENU.CONTACT,
    component: Contact,
  },
];

