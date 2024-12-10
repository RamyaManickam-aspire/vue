<template>
    <button id="one" @click="updateCount($event)">+1</button>
    <button id="five" @click="updateCount($event)">+5</button>
    <button id="minusfive" @click="updateCount($event)">-5</button>
    <h1>Count is {{ count }}</h1>
</template>
<script setup lang="js">
import { ref } from 'vue';

const count = ref(0);

const updateCount = (e) => {
    const id = e.target.id;
    switch (id) {
        case 'one':
            console.log('one')
            count.value += 1
            break;
        case 'five':
            console.log('five')
            count.value += 5
            break;
        case 'minusfive':
            console.log('minusfive')
            count.value -= 5
            break;
        default:
            console.log('default')
    }
}
</script>