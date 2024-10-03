import Contact from "../pages/contact";
import About from "../pages/about";
import Home from "../pages/home";
import Services from "../pages/services";
import News from "../pages/news";
import Projects from "../pages/projects";
import { ROUTES } from "../utils/constant";


export const router = [
    {
      path: ROUTES.home,
      component: Home,
      title: "Home",
    },
    {
      path: ROUTES.contact,
      component: Contact,
    },
    {
      path: ROUTES.services,
      component: Services,
    },
    {
      path: ROUTES.projects,
      component: Projects,
    },
    {
      path: ROUTES.news,
      component: News
    },
    {
      path: ROUTES.about,
      component: About
    }
  ];