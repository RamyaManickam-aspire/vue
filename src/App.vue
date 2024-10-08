<template>
  <div class="container mt-5">
    <h2>Form Validation Example</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="formData.name"
          v-validate="'required'"
          @input="validateField('name')"
          :class="{ 'is-invalid': showErrors && errors.name }"
        />
        <div v-if="showErrors && errors.name" class="invalid-feedback">Name is required.</div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="formData.email"
          v-validate="'required|email'"
          @input="validateField('email')"
          :class="{ 'is-invalid': showErrors && errors.email }"
        />
        <div v-if="showErrors && errors.email" class="invalid-feedback">Enter a valid email.</div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: ''
})

const errors = ref({
  name: false,
  email: false
})

const showErrors = ref(false)

function handleSubmit() {
  validateField('name')
  validateField('email')

  showErrors.value = true

  if (!errors.value.name && !errors.value.email) {
    alert('Form Submitted Successfully!')
    showErrors.value = false
  }
}

function validateField(field) {
  if (field === 'name') {
    errors.value.name = formData.value.name.trim() === ''
  } else if (field === 'email') {
    errors.value.email = !validateEmail(formData.value.email)
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
</script>

<script>
export default {
  directives: {
    validate: {
      mounted(el, binding) {
        el.addEventListener('input', () => {
          const rules = binding.value.split('|')
          let valid = true

          for (let rule of rules) {
            if (rule === 'required' && el.value.trim() === '') {
              valid = false
              break
            } else if (rule === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
              valid = false
              break
            }
          }

          if (!valid) {
            el.classList.add('is-invalid')
          } else {
            el.classList.remove('is-invalid')
          }
        })
      }
    }
  }
}
</script>

<style>
.invalid-feedback {
  display: block;
}
</style>
