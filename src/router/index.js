import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ifood",
    component: () => import("@/Ifood"),
    children: [
      {
        path: "start",
        component: () => import("@/components/StartComponents/Start"),
      },
      {
        path: "restaunt",
        component: () => import("@/views/Restaunt"),
      },
      {
        path: "store",
        component: () => import("@/views/Store"),
        name: "store",
      },
      {
        path: "drinks",
        component: () => import("@/views/Drinks"),
        name: "bebidas",
      },

      {
        path: "pharmacy",
        component: () => import("@/views/Pharmacy"),
        name: "pharmacy",
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
    nome: "login",
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
