import { Home } from "../pages/home";
import { CountPage } from "../pages/count";
import { Todo } from "../pages/todo";

export const router = [
  {
    path: "/",
    component: Home,
  },
  {
    path:"count",
    component: CountPage,
  },
  {
    path:"todo",
    component:Todo,
  }
];

