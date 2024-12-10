<template>
    <h1>Lazy Load Comp</h1>
    <button @click="onClk">Load Lazy Comp</button>
    <Suspense>
        <template #default>
            <lazyLoadComp v-if="isVisible" />
        </template>
        <template #fallback>
            <p>Loading ....</p>
        </template>
    </Suspense>
</template>
<script setup>
import { defineAsyncComponent, ref } from 'vue';


const lazyLoadComp = defineAsyncComponent(() =>
    import('./Home.vue')
)
const isVisible = ref(false);

function onClk() {
    isVisible.value = true
}
</script>