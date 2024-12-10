<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">Name:</label>
            <Field name="username" as="input"></Field>
            <ErrorMessage name="username"></ErrorMessage>
        </div>
        <div>
            <label for="email">Email:</label>
            <Field name="email" as="input"></Field>
            <ErrorMessage name="email"></ErrorMessage>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>
<script setup>
import * as yup from 'yup';
import { ErrorMessage, Field, useForm } from 'vee-validate';
const schema = yup.object({
    username: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email("Email is invalid")
})

const { handleSubmit } = useForm({
    validationSchema: schema
})

const submitForm = handleSubmit((values) => {
    console.log(values)
})
</script>