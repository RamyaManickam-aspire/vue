<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div>
                <label for="username">Username</label>
                <input v-model="username" type="text" id="username" required />
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="password" type="password" id="password" required />
            </div>
            <button type="submit">Login</button>
        </form>

        <p v-if="error" style="color: red">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../axios';  // Import the configured axios instance
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const login = async () => {
    try {
        const response = await axios.post('/login', {
            username: username.value,
            password: password.value
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        router.push('/protected')
    } catch (err) {
        error.value = err.response?.data?.message || 'Login failed';
    }
};
</script>
