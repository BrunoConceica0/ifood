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
        path: ":categoriesPage",
        component: () => import("@/views/CategoriesPage"),
        name: "categoriesPage",
        props: true,
      },
      {
        path: "categoryPage/:id" /* = http://localhost:8080/categoryPage/pizza  :to="{name: 'categoryPage',params: {categoriesPage: $route.params.id,id: id,name: name,},}"*/,
        name: "categoryPage",
        props: true,
        component: () => import("@/views/CategoryPage"),
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
