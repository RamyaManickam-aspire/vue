<template>
  <div v-if="product" class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img
          :src="product.image"
          alt="Product Image"
          class="img-fluid rounded shadow"
          loading="lazy"
        />
      </div>
      <div class="col-md-6">
        <h1 class="mb-3">{{ product.title }}</h1>
        <p class="text-muted">{{ product.description }}</p>
        <h3 class="text-primary mb-4">₹{{ product.price }}</h3>
        <div class="d-flex align-items-center mb-4">
          <label for="quantity" class="me-2">Quantity:</label>
          <input
            id="quantity"
            type="number"
            v-model="quantity"
            min="1"
            class="form-control me-3"
            style="width: 80px"
          />
          <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <button class="back-button btn btn-outline-secondary" @click="$router.go(-1)">
        Back to Products
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { fetchProductById } from '../services/apiService'

const route = useRoute()
const store = useStore()
const quantity = ref(1)
const product = ref(null)

onMounted(async () => {
  try {
    product.value = await fetchProductById(route.params.id)
  } catch (error) {
    console.error('Error fetching product:', error)
  }
})

function addToCart() {
  store.commit('addToCart', { ...product.value, quantity: quantity.value })
}
</script>

<style scoped>
.img-fluid {
  max-height: 400px;
  object-fit: contain;
}

h1 {
  font-size: 2rem;
}

.text-muted {
  font-size: 1rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-outline-secondary {
  margin-top: 10px;
}
</style>
