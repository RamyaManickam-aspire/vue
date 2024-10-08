<!-- src/components/AddTask.vue -->
<template>
  <div class="mb-3">
    <input v-model="task" type="text" class="form-control" placeholder="Add a new task" />
    <button @click="submitTask" class="btn btn-primary mt-2">Add Task</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['addTask'])
const task = ref('')

const submitTask = () => {
  if (task.value.trim()) {
    emits('addTask', task.value)
    task.value = '' // Clear input after adding
  }
}
</script>

<style scoped>
.mb-3 {
  margin-bottom: 1rem;
}
</style>
