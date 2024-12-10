<template>
    <h1>Product detail</h1>
    <div v-for="product in products">
        <p>Product : {{ product.productName }}</p>
        <p>Price : {{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
    </div>
</template>
<script setup lang="js">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const router = useRoute();
const category = router.params.categoryName;
const store = useStore()
const products = computed(() => store.getters.getAllProduct.filter((product) => product.category === category))
</script>