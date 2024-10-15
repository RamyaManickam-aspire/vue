<template>
  <div class="container mt-5">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store'
import { checkUserAuthentication } from '@/services/apiService'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await checkUserAuthentication(email.value, password.value)
    store.commit('setUser', { email: email.value, token: response.token })
    localStorage.setItem('token', response.token)
    router.push('/')
  } catch (error) {
    alert('User not authenticated')
    console.error('Login failed:', error)
  }
}
</script>
