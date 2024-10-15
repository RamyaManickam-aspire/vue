<template>
  <div class="card h-100 text-decoration-none">
    <router-link :to="`/product/${product.id}`">
      <img :src="product.image" class="card-img-top" alt="Product Image" loading="lazy" />
    </router-link>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">₹{{ product.price }}</p>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <label for="quantity" class="form-label me-2 quantity-input">Quantity:</label>
        <input
          type="number"
          id="quantity"
          class="form-control w-25"
          v-model="quantity"
          min="1"
          @change="updateQuantity"
        />
      </div>

      <div class="mt-auto">
        <button class="btn btn-primary" @click.stop="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps(['product'])
const store = useStore()
const quantity = ref(1)

function updateQuantity(event) {
  const value = event.target.value
  if (value <= 0) {
    quantity.value = 1
  }
}

function addToCart() {
  store.commit('addToCart', { ...props.product, quantity: quantity.value })
}
</script>

<style scoped>
.card {
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
}

.card-title {
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.form-control {
  height: 30px;
  padding: 0 0.5rem;
  text-align: center;
}
</style>
