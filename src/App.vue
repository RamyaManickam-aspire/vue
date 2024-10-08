<template>
  <div class="container mt-5">
    <h1 class="text-center">Weather App</h1>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Enter city name"
        v-model="city"
        @keyup.enter="fetchWeather"
      />
      <button class="btn btn-primary" @click="fetchWeather">Search</button>
    </div>

    <div v-if="weather" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ weather.name }}</h5>
        <p class="card-text">Temperature: {{ Math.round(weather.main.temp - 273.15) }}°C</p>
        <p class="card-text">Weather: {{ weather.weather[0].description }}</p>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const city = ref('')
const weather = ref(null)
const error = ref('')

const fetchWeather = async () => {
  if (!city.value) {
    error.value = 'Please enter a city name.'
    weather.value = null
    return
  }

  try {
    error.value = ''
    const apiKey = '7b30f5544535c0d80d409406a7b68894'
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`
    )
    weather.value = response.data
  } catch (err) {
    error.value = 'City not found. Please try again.'
    weather.value = null
  }
}
</script>

<style>
body {
  background-color: #f8f9fa;
}
.card {
  margin-top: 20px;
}
</style>
