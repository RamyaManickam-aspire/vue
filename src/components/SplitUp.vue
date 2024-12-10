<template>
    <div class="todo-app">
        <h1>To-Do List</h1>

        <!-- Add New Task -->
        <div>
            <input v-model="newTask" placeholder="Enter a new task" @keyup.enter="addTask" />
            <button @click="addTask">Add Task</button>
        </div>

        <!-- Task List -->
        <ul>
            <li v-for="task in filteredTasks" :key="task.id">
                <input type="checkbox" v-model="task.completed" @change="toggleTaskCompletion(task.id)" />
                <span :class="{ completed: task.completed }">{{ task.name }}</span>
                <button @click="removeTask(task.id)">Remove</button>
            </li>
        </ul>

        <!-- Filter Options -->
        <div>
            <label>
                <input type="radio" value="all" v-model="filter" /> All
            </label>
            <label>
                <input type="radio" value="active" v-model="filter" /> Active
            </label>
            <label>
                <input type="radio" value="completed" v-model="filter" /> Completed
            </label>
        </div>
    </div>
</template>

<script setup>
// Imports
import { reactive, ref, computed } from 'vue';

// --- 1. Reactive State ---
const tasks = reactive([
    { id: 1, name: 'Learn Vue 3', completed: false },
    { id: 2, name: 'Write Documentation', completed: true },
]);
const newTask = ref('');
const filter = ref('all'); // Filter: 'all', 'active', 'completed'

// --- 2. Computed Properties ---
const filteredTasks = computed(() => {
    if (filter.value === 'active') {
        return tasks.filter(task => !task.completed);
    } else if (filter.value === 'completed') {
        return tasks.filter(task => task.completed);
    }
    return tasks; // 'all'
});

// --- 3. Methods ---
function addTask() {
    if (!newTask.value.trim()) return;
    tasks.push({
        id: Date.now(),
        name: newTask.value.trim(),
        completed: false,
    });
    newTask.value = ''; // Reset input
}

function toggleTaskCompletion(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) task.completed = !task.completed;
}

function removeTask(taskId) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) tasks.splice(index, 1);
}
</script>

<style scoped>
.todo-app {
    max-width: 400px;
    margin: auto;
    font-family: Arial, sans-serif;
}

input[type="text"] {
    width: 70%;
    padding: 5px;
    margin-right: 10px;
}

button {
    padding: 5px 10px;
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    margin: 5px 0;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

label {
    margin-right: 10px;
}
</style>
