<template>
  <div id="app">
    <NavbarPage />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import NavbarPage from './components/NavbarPage.vue'

const router = useRouter()
const store = useStore()

onMounted(() => {
  const isAuthenticated = store.getters.isAuthenticated
  if (!isAuthenticated) {
    router.push({ name: 'Login' })
  }
})
</script>
