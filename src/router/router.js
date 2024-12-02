import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProductCard from "../components/ProductCard.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/product/:productName",
    name: "ProductCard",
    component: ProductCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
