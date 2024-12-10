<template>
    <form @submit.prevent="addProduct">
        <div>
            <label for="productName">Product name: </label>
            <input type="text" name="productName" v-model="formData.productName" />
        </div>
        <div>
            <label for="price">Price: </label>
            <input type="number" name="price" v-model="formData.price" />
        </div>
        <div>
            <select v-model="formData.category">
                <option v-for="category in categoryList" :value="category">{{ category }}</option>
            </select>
        </div>
        <button type="submit">Add Product</button>
    </form>
</template>
<script setup lang="js">
import { onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
const formData = ref({
    productName: '',
    price: null,
    category: ''
})
const categoryList = ref([])
const store = useStore()
store.dispatch('getAllCategories').then(() => {
    categoryList.value = store.state.categories
}).catch(err => {
    console.log(err)
})
const addProduct = () => {
    store.dispatch('addProduct', formData.value).then(() => {
        console.log(store.getters.getAllProduct)
    })
    formData.value = { productName: '', price: null, category: '' }
}
</script>