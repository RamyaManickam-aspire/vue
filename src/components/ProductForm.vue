<template>
    <form @submit.prevent="handleFormSubmit">
        <div>
            <label for="name">Product: </label>
            <input name="name" type="text" v-model="productData.name" />
        </div>
        <div>
            <label for="price">Price: </label>
            <input name="price" type="number" v-model="productData.price" />
        </div>
        <div>
            <label for="quantity">Quantity: </label>
            <input name="quantity" type="text" v-model="productData.quantity" />
        </div>
        <button type="submit">Add</button>
    </form>
    <ProductTable :productList="productList" />
</template>
<script setup>
import { reactive, ref } from 'vue';
import ProductTable from './ProductTable.vue';

const productData = reactive({
    name: '',
    price: null,
    quantity: null
})

const productList = ref([]);
const handleFormSubmit = () => {
    productList.value.push({ ...productData });

    // Clear the form fields by directly resetting the values
    productData.name = '';
    productData.price = null;
    productData.quantity = null;
}
</script>