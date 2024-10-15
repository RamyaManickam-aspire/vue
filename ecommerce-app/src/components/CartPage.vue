<template>
  <div class="container mt-5">
    <h2 class="mb-4">Your Cart</h2>
    <div v-if="cartItems.length > 0" class="cart-items">
      <div class="cart-item d-flex align-items-center" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" alt="Product Image" class="item-image me-3" loading="lazy" />
        <div class="cart-item-details flex-grow-1">
          <h4 class="mb-1">{{ item.title }}</h4>
          <p class="mb-0">Quantity: {{ item.quantity }}</p>
          <p class="mb-0">Price: ₹{{ item.price.toFixed(2) }}</p>
        </div>
        <button class="btn btn-danger remove-button" @click="removeItem(item.id)">Remove</button>
      </div>
      <div class="cart-total mt-4">
        <h3>Total: ₹{{ cartTotal }}</h3>
      </div>
    </div>
    <div v-else>
      <h4>Your cart is empty.</h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cartItems = computed(() => store.getters.cartItems)
const cartTotal = computed(() => store.getters.cartTotalPrice)

function removeItem(id) {
  store.commit('removeFromCart', id)
}
</script>

<style scoped>
.cart-items {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  background-color: #f9f9f9;
}

.cart-item {
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.item-image {
  max-width: 80px;
  object-fit: contain;
}

.cart-total {
  font-weight: bold;
}

.btn-danger {
  margin-left: 10px;
}
</style>
