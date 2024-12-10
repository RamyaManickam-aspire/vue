<template>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">About</RouterLink>
    </li>
    <li>
      <RouterLink to="/addproduct">Add Product</RouterLink>
    </li>
    <li>
      <RouterLink to="/categories">Categories</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'user', params: { id: 11 } }">User</RouterLink>
    </li>
    <li>
      <RouterLink to="/user/11/profile">User Profile</RouterLink>
    </li>
    <RouterView></RouterView>
  </ul>
  <!-- <button @click="renderDynamic">Render Dynamic Comp</button> -->
  <!-- <div>
    <p>{{ name }}</p>
    <a :href="'https://google.com'" target="_blank">Google</a>
    <hr>
    <input v-model="nameInput" type="text">
    <p>{{ nameInput }}</p>
  </div> -->
  <!-- <Parent /> -->
  <!-- <FormPage />
  <VeevalidateForm /> -->
  <!-- <div v-background="'red'">This div has a custom background color</div> -->
  <!-- <Counter /> -->
  <!-- <LazyLoad /> -->
  <!-- <SplitUp /> -->
  <!-- Dynamic Class binding -->
  <!-- <p :class="{ active: isActive, 'text-large': isLarge }">I am a dynamic class added para</p>
  <p :class="['base-class', isActive ? 'active' : '', isLarge && 'text-large']">Array based class binding</p>
  <p :style="{ color: textColor, fontSize: font + 'px' }">I am a dynamic style added para</p>
  <p :style="[baseStyle, activeStyle]">Array based style binding</p> -->
  <!-- <nav>
    <ul>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/protected">Protected</router-link></li>
    </ul>
  </nav>
  <router-view></router-view> -->
  <!-- <ProductForm /> -->
  <!-- <AddTask /> -->
  <!-- <MultipleCounter /> -->
  <!-- <DynamicForm /> -->
  <!-- <AddProduct /> -->
  <!-- <div>
    <button @click="showModal = true">Open Modal</button>
    <Modal :isVisible="showModal" @close="showModal = false">
      <h2>Hello from Modal!</h2>
      <p>This is some content inside the modal.</p>
    </Modal>
  </div> -->
  <!-- <RealTimeSearch /> -->
  <!-- <MovieApp /> -->
  <!-- <Debounce />
  <FormPage /> -->
  <WeatherApp />
</template>
<script setup>
import { onMounted, ref } from 'vue';
import Parent from './components/Parent.vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import FormPage from './components/FormPage.vue';
import VeevalidateForm from './components/VeevalidateForm.vue';
import axios from 'axios';
import Counter from './components/Counter.vue';
import LazyLoad from './components/LazyLoad.vue';
import SplitUp from './components/SplitUp.vue';
import Login from './components/Login.vue';
import ProductForm from './components/ProductForm.vue';
import AddTask from './components/AddTask.vue';
import MultipleCounter from './components/MultipleCounter.vue';
import DynamicForm from './components/DynamicForm.vue';
import AddProduct from './components/AddProduct.vue';
import Modal from './Modal/Modal.vue';
import RealTimeSearch from './components/RealTimeSearch.vue';
import MovieApp from './components/MovieApp.vue';
import Debounce from './components/Debounce.vue';
import WeatherApp from './components/WeatherApp.vue';
const name = ref('');
const nameInput = ref('');
const router = useRouter();
const isActive = ref(true);
const isLarge = ref(true);
const font = ref(20);
const textColor = ref('brown');
const baseStyle = ref({
  fontSize: '30px'
})
const activeStyle = ref({
  color: 'blue'
})
const showModal = ref(false)
const renderDynamic = () => {
  router.push({ name: 'dynamic' })
}
onMounted(async () => {
  try {
    var response = await axios.get('https://fakestoreapi.com/products/categories')
    console.log(response.data)
  }
  catch (error) {
    console.log(error)
  }
})
</script>
<style>
.base-class {
  background-color: red;
}

.active {
  color: blue;
}

.text-large {
  font-size: 30px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>