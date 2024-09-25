<template>
  <div class="container mt-5">
    <h1 class="mb-4">Product Listing</h1>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">$ {{ product.price }}</p>
            <router-link
              :to="{ name: 'product-details', params: { id: product.id } }"
              class="btn btn-primary"
            >
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Product A', price: 50 },
  { id: 2, name: 'Product B', price: 75 },
  { id: 3, name: 'Product C', price: 100 }
])
</script>

<style scoped>
/* Optional scoped styles */
</style>
