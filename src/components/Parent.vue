<script setup>
import { ref } from 'vue';
import Child from './Child.vue';
const count = ref(0)
const receiveCount = (newCount) => {
    count.value = newCount
}
</script>

<template>
    <Child :message="'Message from Parent'" @update-count="receiveCount">
        <p>Child Component</p>
        <p>Child from parent</p>
    </Child>
    <p>{{ count }}</p>
</template>