import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
const ProductList = () => import('@/components/ProductList.vue')
const ProductDetail = () => import('@/components/ProductDetail.vue')
const CartPage = () => import('@/components/CartPage.vue')
const LoginPage = () => import('@/components/LoginPage.vue')
const routes = [
  { path: '/', component: ProductList, name: 'ProductList', meta: { requiresAuth: true } },
  { path: '/product/:id', component: ProductDetail, name: 'ProductDetail' },
  { path: '/cart', component: CartPage, name: 'Cart', meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage, name: 'Login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
