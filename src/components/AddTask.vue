<template>
    <form @submit.prevent="addTask">
        <div>
            <label for="task">Task name: </label>
            <input type="text" name="task" v-model="formData.name" />
        </div>
        <div>
            <label for="status">Completed: </label>
            <input type="checkbox" name="status" v-model="formData.status" />
        </div>
        <button type="submit">Add</button>
    </form>
    <table>
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasks" :key="task.name">
                <td>
                    <div v-if="task.isEditing">
                        <input v-model="task.name" />
                    </div>
                    <div v-else>
                        {{ task.name }}
                    </div>
                </td>
                <td>
                    <div v-if="task.isEditing">
                        <input type="checkbox" v-model="task.status" />
                    </div>
                    <div v-else>
                        {{ task.status === true ? 'Completed' : 'Incomplete' }}
                    </div>
                </td>
                <td>
                    <button v-if="!task.isEditing" @click="editTask(index)">Edit</button>
                    <button v-if="task.isEditing" @click="saveTask(index)">Save</button>
                    <button @click="deleteTask(task.name)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { reactive, ref } from 'vue';

const formData = reactive({
    name: '',
    status: false
})
const tasks = ref([])
const addTask = () => {
    tasks.value.push({ ...formData })
    formData.name = '';
    formData.status = false
    console.log(tasks.value)
}
const editTask = (index) => {
    tasks.value[index].isEditing = true;
};

const saveTask = (index) => {
    tasks.value[index].isEditing = false;
    console.log('Saved Task:', tasks.value[index]);
};

const deleteTask = (taskName) => {
    tasks.value = tasks.value.filter((task) => task.name != taskName)
}
</script>