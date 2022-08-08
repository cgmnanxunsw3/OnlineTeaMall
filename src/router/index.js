import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: "/home",
    name: "HomeView",
    component: HomeView,
  },
  // 此路径指向 home （重定向）
  {
    path: "/",
    redirect: "/home",
  },
  //商品列表
  {
    path: "/list",
    name: "ListView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. -->懒加载
    component: () =>
      import(/* webpackChunkName: "ListView" */ "../views/List.vue"),
  },
  // 购物车
  {
    path: "/cart",
    name: "CartView",
    component: () => import("../views/Cart.vue"),
  },
  // 我的主页
  {
    path: "/my",
    name: "MyView",
    component: () => import("../views/My.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
