<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Vue 3 Shopping Cart</h1>

    <!-- Products List -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">$ {{ product.price.toFixed(2) }}</p>
            <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart Summary -->
    <div class="mt-5">
      <h2>Shopping Cart</h2>
      <p v-if="cart.length === 0">Your cart is empty.</p>
      <table v-else class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>$ {{ item.price.toFixed(2) }}</td>
            <td>{{ item.quantity }}</td>
            <td>$ {{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">Remove</button>
            </td>
          </tr>
          <!-- Total Row -->
          <tr>
            <td colspan="3" class="text-end"><strong>Total:</strong></td>
            <td>
              <strong>$ {{ cartTotalPrice.toFixed(2) }}</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div v-if="cart.length > 0" class="d-flex justify-content-end">
        <button class="btn btn-warning" @click="clearCart">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const products = computed(() => store.getters.products)
const cart = computed(() => store.getters.cart)
const cartTotalPrice = computed(() => store.getters.cartTotalPrice)

const addToCart = (product) => {
  store.dispatch('addToCart', product)
}

const removeFromCart = (productId) => {
  store.dispatch('removeFromCart', productId)
}

const clearCart = () => {
  store.dispatch('clearCart')
}
</script>

<style scoped>
.container {
  max-width: 960px;
}

.card-title {
  font-size: 1.25rem;
}

.table th,
.table td {
  vertical-align: middle;
}

.text-end {
  text-align: right;
}
</style>
