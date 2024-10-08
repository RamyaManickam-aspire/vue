<template>
  <div>
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      class="form-control"
      placeholder="Add a new task"
    />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

function addTask() {
  if (newTask.value) {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

function removeTask(index) {
  tasks.value.splice(index, 1) // Remove the task at the given index
}
</script>

<style scoped>
/* Add your styles here */
</style>
