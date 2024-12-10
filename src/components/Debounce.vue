<template>
    <div class="container">
        <h1>Debounced Search</h1>
        <input type="text" v-model="searchText" @input="debouncedSearch" placeholder="Type to search"
            class="form-control" />
        <p>Search Text: {{ searchResult }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";

// A utility function to debounce another function
function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Reactive state
const searchText = ref("");
const searchResult = ref("");

// Function to simulate a search API call
const search = (text) => {
    searchResult.value = `Searching for: ${text}`;
};

// Debounced version of the search function
const debouncedSearch = debounce(() => search(searchText.value), 500);
</script>

<style>
.container {
    margin: 20px;
}
</style>
