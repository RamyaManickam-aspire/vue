<template>
    <h1>Weather App</h1>
    <form>
        <label for="city">City: </label>
        <input type="text" name="city" v-model="city">
        <button @click.prevent="getWeather">Get weather</button>
    </form>
    <div v-if="weatherData.length != 0">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <p><strong>Temperature:</strong> {{ weatherData.main.temp }}°C</p>
        <p><strong>Weather:</strong> {{ weatherData.weather[0].description }}</p>
        <p><strong>Humidity:</strong> {{ weatherData.main.humidity }}%</p>
        <p><strong>Wind Speed:</strong> {{ weatherData.wind.speed }} m/s</p>
    </div>
</template>
<script setup lang="js">
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const city = ref('');
const weatherData = ref([])
const getWeather = () => {
    store.dispatch('getWeather', city.value).then(() => {
        weatherData.value = store.state.weather
    }).catch((err) => console.error(err))
}
</script>