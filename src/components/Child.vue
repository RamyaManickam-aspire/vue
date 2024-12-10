<script setup>
defineProps({
    message: String
})

const emit = defineEmits(['update-count'])
const updateCount = () => {
    const count = Math.floor(Math.random() * 100) + 1;
    emit('update-count', count)
}
</script>
<template>
    <p>{{ message }}</p>
    <button @click="updateCount">Update Count</button>
    <slot></slot>
</template>