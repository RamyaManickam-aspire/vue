<template>
  <div class="container mt-5">
    <h1 class="mb-4">Products</h1>
    <div class="mb-4">
      <label for="categoryFilter" class="form-label">Filter by Category:</label>
      <div class="d-flex align-items-center">
        <select id="categoryFilter" v-model="selectedCategory" class="form-select">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <button
          v-if="selectedCategory"
          class="btn btn-outline-secondary btn-sm ms-2"
          @click="clearCategoryFilter"
        >
          X
        </button>
      </div>
    </div>
    <div class="mb-4">
      <label for="sort" class="form-label">Sort by Price:</label>
      <div class="d-flex align-items-center">
        <select id="sort" v-model="sortOrder" class="form-select">
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <button
          v-if="sortOrder !== 'asc'"
          class="btn btn-outline-secondary btn-sm ms-2"
          @click="clearSort"
        >
          X
        </button>
      </div>
    </div>
    <div class="row">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        class="col-md-3 mb-4"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { fetchProducts } from '../services/apiService'
import ProductCard from './ProductCard.vue'

const products = ref([])
const categories = ref([])
const selectedCategory = ref('')
const sortOrder = ref('asc')
const filteredProducts = ref([])

onMounted(async () => {
  try {
    products.value = await fetchProducts()
    categories.value = [...new Set(products.value.map((product) => product.category))]
    filterAndSortProducts()
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})

watch([selectedCategory, sortOrder], () => {
  filterAndSortProducts()
})

const filterAndSortProducts = () => {
  let filtered = products.value

  if (selectedCategory.value) {
    filtered = filtered.filter((product) => product.category === selectedCategory.value)
  }

  if (sortOrder.value === 'asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortOrder.value === 'desc') {
    filtered.sort((a, b) => b.price - a.price)
  }

  filteredProducts.value = filtered
}

const clearCategoryFilter = () => {
  selectedCategory.value = ''
}

const clearSort = () => {
  sortOrder.value = 'asc'
}
</script>
