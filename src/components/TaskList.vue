<!-- src/components/TaskList.vue -->
<template>
  <div class="list-group">
    <div class="list-group-item" v-for="(task, index) in tasks" :key="index">
      <div class="d-flex justify-content-between align-items-center">
        <span>{{ task }}</span>
        <button @click="removeTask(task)" class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  tasks: Array
})
const emits = defineEmits(['removeTask'])

const removeTask = (task) => {
  emits('removeTask', task)
}
</script>

<style scoped>
.list-group-item {
  margin-top: 10px;
}
</style>
