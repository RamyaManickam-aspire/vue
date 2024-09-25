<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">{{ product.name }} Details</h1>
        <h3 class="card-subtitle mb-2 text-muted">Price: ${{ product.price }}</h3>
        <p class="card-text">{{ product.description }}</p>
        <router-link to="/" class="btn btn-secondary">Back to Product Listing</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const products = [
  { id: 1, name: 'Product A', price: 50, description: 'Description for Product A' },
  { id: 2, name: 'Product B', price: 75, description: 'Description for Product B' },
  { id: 3, name: 'Product C', price: 100, description: 'Description for Product C' }
]

const product = computed(() => products.find((p) => p.id === Number(route.params.id)))
</script>

<style scoped>
/* Optional scoped styles */
</style>
