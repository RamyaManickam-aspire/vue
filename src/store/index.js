import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    categories: [],
    productDetail: [],
    movies: [],
    formData: {},
    weather: [],
  },
  getters: {
    getAllProduct: (state) => state.productDetail,
  },
  mutations: {
    getCategories(state, payload) {
      state.categories = payload;
    },
    addProduct(state, payload) {
      state.productDetail.push(payload);
    },
    getAllMovies(state, payload) {
      state.movies = payload;
    },
    setFormData(state, payload) {
      state.formData = payload;
    },
    setWeather(state, payload) {
      state.weather = payload;
    },
  },
  actions: {
    async getAllCategories({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://fakestoreapi.com/products/categories")
          .then((res) => {
            commit("getCategories", res.data);
            resolve(res.data);
          })
          .catch((error) => {
            reject("Failed to fetch gategories", error);
          });
      });
    },
    addProduct({ commit }, payload) {
      commit("addProduct", payload);
    },
    getAllMovies({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://api.tvmaze.com/shows")
          .then((res) => {
            commit("getAllMovies", res.data);
            resolve(res.data);
          })
          .catch((error) => {
            reject("Error fetching the movies", error);
          });
      });
    },
    async getFormData({ commit }, formData) {
      setTimeout(() => {
        axios
          .post("http://localhost:3000/user", formData)
          .then((res) => {
            commit("setFormData", formData);
            return Promise.resolve(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, 1000);
    },
    async getWeather({ commit }, city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&units={unit}`
        )
        .then((res) => {
          commit("setWeather", res.data);
          return Promise.resolve(res.data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
  },
});
export default store;
