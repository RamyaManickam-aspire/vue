<template>
    <div class="container mt-5">
        <h1>Product Cards</h1>

        <div v-if="productList.length > 0" class="row">
            <div v-for="(product, index) in productList" :key="index" class="col-md-4 mb-4">
                <div class="card product-card">
                    <img :src="product.image" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                        <p class="card-text">
                            <strong>Category:</strong> {{ product.category }}
                        </p>
                        <p class="card-text">
                            <strong>Price:</strong> ${{ product.price }}
                        </p>
                        <p class="card-text">
                            <strong>Rating:</strong> {{ product.rating.rate }} ({{ product.rating.count }} reviews)
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <p>Loading products...</p>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const productName = computed(() => route.params.productName);

const fetchProductDetail = async () => {
    store.dispatch('getProductDetail', productName.value).then(() => {
        console.log(store.state.productDetail);
    }).catch(err => {
        console.error(err);
    });
};

onMounted(() => fetchProductDetail());

watch(() => route.params.productName, (newProductName, oldProductName) => {
    if (newProductName !== oldProductName) {
        fetchProductDetail();
    }
});

const productList = computed(() => store.state.productDetail || []);
</script>

<style scoped>
.product-card {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.product-card .card-body {
    flex-grow: 1;
}

.card {
    border: 1px solid #ddd;
}

.card-img-top {
    object-fit: cover;
    height: 200px;
}

.container {
    padding: 0 15px;
}
</style>
