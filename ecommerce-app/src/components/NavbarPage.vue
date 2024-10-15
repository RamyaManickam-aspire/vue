<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">E-Commerce</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">Cart</router-link>
          </li>
        </ul>
        <div class="ms-auto d-flex align-items-center">
          <div class="cart-icon">
            <i class="bi bi-cart fs-5"></i>
            <span class="badge count-badge">{{ cartCount }}</span>
          </div>
          <button
            class="btn btn-outline-danger ms-3"
            @click.prevent="logout"
            v-if="isAuthenticated"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const cartCount = computed(() => store.getters.cartCount)
const isAuthenticated = computed(() => store.getters.isAuthenticated)

const logout = () => {
  store.commit('setUser', null)
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style scoped>
.cart-icon {
  position: relative;
  display: inline-block;
  margin-right: 15px;
}

.count-badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: rgb(17, 0, 255);
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 50%;
  padding: 2px 6px;
  border: 2px solid white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.btn-outline-danger {
  margin-left: 10px;
}
</style>
