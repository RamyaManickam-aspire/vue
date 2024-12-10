import { createRouter, createWebHistory } from "vue-router";
// import About from "../components/About.vue";
// import Home from "../components/Home.vue";
import User from "../components/User.vue";
import UserProfile from "../components/UserProfile.vue";
import Dynamic from "../components/Dynamic.vue";
import Login from "../components/Login.vue";
import Protected from "../components/Protected.vue";
import AddProduct from "../components/AddProduct.vue";
import ProductCategory from "../components/ProductCategory.vue";
import ProductDetail from "../components/ProductDetail.vue";
//Code Splitup
const Home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");
const routes = [
  { path: "/", component: Home },
  { path: "/home", redirect: "/" },
  { path: "/addproduct", component: AddProduct },
  { path: "/categories", component: ProductCategory },
  { path: "/category/:categoryName", component: ProductDetail },
  {
    path: "/about",
    component: About,
    alias: "/about-us",
    beforeEnter: (to, from, next) => {
      const isAuth = true;
      if (isAuth) {
        next();
      } else {
        next("home");
      }
    },
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
    children: [{ path: "profile", component: UserProfile }],
  },
  {
    path: "/dynamic",
    component: Dynamic,
    name: "dynamic",
  },
  { path: "/login", component: Login },
  {
    path: "/protected",
    component: Protected,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token"); // Check if there's a valid token in localStorage
      if (!token) {
        next("/home"); // If no token, redirect to login
      } else {
        next(); // If token exists, allow access to the protected route
      }
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = true;
//   if (to.path === "/dynamic" && !isAuthenticated) {
//     next("/home");
//   } else {
//     next();
//   }
// });
export default router;
