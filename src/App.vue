<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const categories = ref([])

store.dispatch('getCategories').then(() => {
  categories.value = store.state.categories
}).catch(err => {
  console.log(err)
})
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-lg-2 p-3 bg-light min-vh-100">
        <h4 class="mb-4">Categories</h4>
        <div class="list-group">
          <div v-for="category in categories" :key="category" class="list-group-item">
            <RouterLink :to="{ name: 'ProductCard', params: { productName: category } }" class="text-decoration-none">
              {{ category }}
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="col-md-9 col-lg-10 p-3">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.list-group-item {
  font-size: 1.1rem;
}

.list-group-item:hover {
  background-color: #e9ecef;
}
</style>
