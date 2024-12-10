<template>
    <div>
        <form @submit.prevent="onSearch">
            <label for="search">Search movies:</label>
            <input type="search" name="search" v-model="searchQuery" />
            <button type="submit">Search</button>
        </form>
    </div>
    <div v-if="!isLoading && isFiltered">
        <img :src="filteredMovie[0]?.image.medium">
        <p>Movie - {{ filteredMovie[0]?.name }}</p>
        <p>Language - {{ filteredMovie[0]?.language }}</p>
        <p>Runtime - {{ filteredMovie[0]?.runtime }}</p>
        <p>Rating - {{ filteredMovie[0]?.rating }}</p>
        <p>Summary - {{ filteredMovie[0]?.summary }}</p>
    </div>
</template>
<script setup lang="js">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const searchQuery = ref('');
const store = useStore();
const filteredMovie = ref([]);
const isLoading = ref(true);
const isFiltered = ref(false)
onMounted(() => {
    store.dispatch('getAllMovies').then((res) => {
        isLoading.value = false
    }).catch((err) => console.error(err))
})
const onSearch = () => {
    filteredMovie.value = store.state.movies.filter((mov) => mov.name === searchQuery.value);
    isFiltered.value = true
}
</script>