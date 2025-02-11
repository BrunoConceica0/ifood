import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ifood",
    component: () => import("@/views/Home"),
    children: [
      {
        path: ":categoryPage",
        component: () => import("@/views/CategoryPage"),
        name: "categoryPage",
        props: true,
      },
    ],
  },
  {
    path: "/search",
    component: () => import("@/views/Search"),
    nome: "search",
  },

  {
    path: "/login",
    component: () => import("@/views/Login"),
    name: "login",
  },
  {
    path: "*",
    component: () => import("@/views/NotFound"),
    name: "NotFound",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
