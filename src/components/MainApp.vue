<!-- src/components/MainApp.vue -->
<template>
  <div class="container">
    <h1 class="text-center my-4">Task Manager</h1>
    <AddTask @addTask="addTask" />
    <Suspense>
      <template #default>
        <TaskList :tasks="tasks" @removeTask="removeTask" />
      </template>
      <template #fallback>
        <div class="text-center">Loading task list...</div>
      </template>
    </Suspense>
    <div v-if="isLoading" class="text-center">Please wait, loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { defineAsyncComponent } from 'vue'
import AddTask from './AddTask.vue'

// Lazy load the TaskList component
const TaskList = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./TaskList.vue'))
    }, 1000) // Simulate a loading delay of 1 second
  })
})

const tasks = ref([])

// Initialize with default tasks
const defaultTasks = [
  'Learn Vue 3',
  'Build a Task Manager App',
  'Review JavaScript Concepts',
  'Explore Vue Router',
  'Understand Vuex State Management'
]
tasks.value = defaultTasks.slice() // Copy default tasks to tasks

const isLoading = ref(true)

const addTask = (task) => {
  tasks.value.push(task)
}

const removeTask = (taskToRemove) => {
  tasks.value = tasks.value.filter((task) => task !== taskToRemove)
}

// Set loading to false after the component is mounted
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false // Set loading to false after 1 second
  }, 1000) // Match this delay with the lazy loading delay
})
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
