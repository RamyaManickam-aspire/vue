<template>
    <form @submit.prevent="onFormSubmit">
        <div>
            <label for="username">Name:</label>
            <input type="text" name="username" v-model="formData.name" v-focus required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" name="email" v-model="formData.email" required />
        </div>
        <button type="submit">Submit</button>
    </form>
</template>
<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const formData = reactive({
    name: '',
    email: ''
})
const store = useStore();
const onFormSubmit = () => {
    store.dispatch('getFormData', formData).then(() => {
        console.log(store.state.formData)
    }).catch((err) => console.error(err))
}
</script>