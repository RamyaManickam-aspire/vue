<template>
  <div class="container mt-5">
    <h1 class="text-center">To-Do List</h1>
    <div class="d-flex justify-content-center mb-3">
      <input
        type="text"
        class="form-control me-2"
        v-model="newTask"
        placeholder="Add a new task"
      />
      <button class="btn btn-primary" @click="addTask">Add Task</button>
    </div>
    <ul class="list-group">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ task }}
        <button class="btn btn-danger btn-sm" @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
<style scoped>
.form-control {
  max-width: 300px;
}
</style>
