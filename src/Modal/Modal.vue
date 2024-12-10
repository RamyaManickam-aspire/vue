<template>
    <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
        <div class="modal-content">
            <slot></slot>
            <button class="close-btn" @click="closeModal">Close</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    max-width: 90%;
    text-align: center;
}

.close-btn {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #ff4d4f;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.close-btn:hover {
    background-color: #ff7875;
}
</style>
