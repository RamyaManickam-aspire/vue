<template>
    <div>
        <h2>Protected Route</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from '../axios';  // Import the configured axios instance

const message = ref('');

onMounted(async () => {
    try {
        const response = await axios.get('/protected');
        message.value = response.data.message;
    } catch (error) {
        message.value = 'Access denied or session expired';
    }
});
</script>
