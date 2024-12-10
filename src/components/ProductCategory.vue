<template>
    <ul>
        <li v-for="category in categories">
            <RouterLink :to="'/category/' + category">{{ category }}</RouterLink>
        </li>
    </ul>
</template>
<script setup lang="js">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const categories = computed(() => store.state.categories)
</script>