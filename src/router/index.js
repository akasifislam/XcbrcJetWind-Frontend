import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About/index.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact/index.vue")
  },
  {
    path: "/articles",
    name: "articles.index",
    component: () =>
      import("../views/Articles/index.vue")
  },
  {
    path: "/articles/:slug",
    name: "articles.show",
    component: () =>
      import("../views/Articles/show.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
