<template>
    <form @submit.prevent="addField">
        <div>
            <label for="fieldName">Field Name: </label>
            <input type="text" name="fieldName" v-model="formData.fieldName" />
        </div>
        <div>
            <label for="fieldType">Field Type: </label>
            <input type="text" name="fieldType" v-model="formData.fieldType" />
        </div>
        <button type="submit">Add</button>
    </form>
    <form>
        <div v-for="(field, index) in formFields">
            <label :for="field.fieldType">{{ field.fieldName }} : </label>
            <input :type="field.fieldType" :name="field.fieldName">
            <button @click.prevent="removeField(index)">x</button>
        </div>
    </form>
</template>
<script setup lang="js">
import { reactive, ref } from 'vue';

const formData = reactive({
    fieldName: '',
    fieldType: ''
})
const formFields = ref([])
const addField = () => {
    formFields.value.push({ ...formData });
    console.log(formFields.value)
    formData.fieldName = '';
    formData.fieldType = ''
}
const removeField = (fieldIndex) => {
    formFields.value = formFields.value.filter((field, index) => index != fieldIndex)
}
</script>