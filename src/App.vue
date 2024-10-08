<template>
  <div class="container mt-5">
    <h2>Registration Form</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          id="username"
          v-model="form.username"
          class="form-control"
          :class="{ 'is-invalid': errors.username }"
          @input="validateField('username')"
        />
        <p v-if="errors.username" class="text-danger">{{ errors.username }}</p>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          @input="validateField('email')"
        />
        <p v-if="errors.email" class="text-danger">{{ errors.email }}</p>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
          @input="validateField('password')"
        />
        <p v-if="errors.password" class="text-danger">{{ errors.password }}</p>
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  username: '',
  email: '',
  password: ''
})

const errors = ref({})

// Function to validate the entire form
const validateForm = () => {
  errors.value = {}
  validateField('username')
  validateField('email')
  validateField('password')

  return Object.keys(errors.value).length === 0
}

// Function to validate a specific field
const validateField = (field) => {
  switch (field) {
    case 'username':
      if (!form.value.username) {
        errors.value.username = 'Username is required.'
      } else {
        delete errors.value.username // Clear the error if the field is valid
      }
      break

    case 'email':
      if (!form.value.email) {
        errors.value.email = 'Email is required.'
      } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = 'Email is invalid.'
      } else {
        delete errors.value.email // Clear the error if the field is valid
      }
      break

    case 'password':
      if (!form.value.password) {
        errors.value.password = 'Password is required.'
      } else {
        delete errors.value.password // Clear the error if the field is valid
      }
      break
  }
}

const handleSubmit = () => {
  if (validateForm()) {
    alert('Registration successful!')
    // You can handle form submission logic here (e.g., API call)
    console.log(form.value)
  }
}
</script>

<style>
/* Additional styling can be added here if needed */
.text-danger {
  color: red; /* Optional: to ensure the text color is red */
}
</style>
