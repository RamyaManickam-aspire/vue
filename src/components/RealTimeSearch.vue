<template>
    <div>
        <form>
            <label for="search">Search items:</label>
            <input type="search" name="search" v-model="searchQuery" @input.prevent="onSearch" />
        </form>
    </div>
    <ul>
        <li v-for="item in filteredItems">{{ item.name }}</li>
    </ul>
</template>
<script setup lang="js">
import { computed, onMounted, ref } from 'vue';

const items = ref([
    { id: 1, name: "Apple", description: "Fresh red apple", category: "Fruit" },
    { id: 2, name: "Banana", description: "Yellow ripe banana", category: "Fruit" },
    { id: 3, name: "Carrot", description: "Crunchy orange carrot", category: "Vegetable" },
    { id: 4, name: "Lettuce", description: "Crisp green lettuce", category: "Vegetable" },
    { id: 5, name: "Strawberry", description: "Sweet red strawberry", category: "Fruit" },
    { id: 6, name: "Tomato", description: "Ripe red tomato", category: "Vegetable" },
    { id: 7, name: "Mango", description: "Tropical mango", category: "Fruit" },
    { id: 8, name: "Broccoli", description: "Green broccoli", category: "Vegetable" },
    { id: 9, name: "Pineapple", description: "Sweet tropical pineapple", category: "Fruit" },
    { id: 10, name: "Spinach", description: "Fresh green spinach", category: "Vegetable" }
]);
const searchQuery = ref('');
const filteredItems = ref([])
filteredItems.value = items.value
const onSearch = () => {
    filteredItems.value = items.value.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
}
// const filteredItems = computed(() => {
//     if (!searchQuery.value) {
//         return items.value
//     }
//     else {
//         return items.value.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
//     }
// })
</script>