import { MENU } from "../utils/constant";
import {Home} from "../pages/home";
import {Login} from "../pages/login";
import {Register} from "../pages/register";
import {About} from "../pages/about";
import {Products} from "../pages/products";
import {Product} from "../pages/product";
import BasketPageItem from "../components/basket";

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
    path: MENU.PRODUCTS,
    component: Products,
  },

  {
    path: MENU.PRODUCT,
    component: Product,
  },
  {
    path: MENU.BASKET,
    component: BasketPageItem,
  },
];
