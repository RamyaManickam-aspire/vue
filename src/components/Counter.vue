<template>
    <div>
        <h1>Form with Table</h1>

        <!-- Form Section -->
        <form @submit.prevent="addUser">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" placeholder="Enter username" />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" placeholder="Enter email" />
            </div>
            <button type="submit">Add</button>
        </form>

        <!-- Table Section -->
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            users: [],
        };
    },
    methods: {
        addUser() {
            if (this.username && this.email) {
                // Add the user to the users array
                this.users.push({
                    username: this.username,
                    email: this.email,
                });

                // Clear the form after adding
                this.username = '';
                this.email = '';
            } else {
                alert('Please fill in both fields');
            }
        },
    },
};
</script>

<style scoped>
form {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table th,
table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}
</style>
