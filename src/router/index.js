import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Header from "@/components/Header";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [],
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
    name: "login",
  },
  {
    path: "/Header",
    name: "Header",
    component: Header,
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
