<template>
    <h1>User</h1>
    <p>Id is {{ id }}</p>
    <RouterView></RouterView>
</template>
<script setup>
import { RouterView, useRoute } from 'vue-router';

const router = useRoute();
const id = router.params.id
</script>