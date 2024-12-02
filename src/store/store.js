import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    categories: [],
    productDetail: {},
  },
  getters: {},
  mutations: {
    getCategoriesData(state, payload) {
      state.categories = payload;
    },
    getProductData(state, payload) {
      state.productDetail = payload;
    },
  },
  actions: {
    getCategories({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://fakestoreapi.com/products/categories")
          .then((res) => {
            commit("getCategoriesData", res.data);
            resolve("Categories fetched properly", res.data);
          })
          .catch((err) => {
            reject("Error fetching categories", err);
          });
      });
    },
    getProductDetail({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://fakestoreapi.com/products/category/${payload}`)
          .then((res) => {
            commit("getProductData", res.data);
            resolve("Product details fetched properly", res.data);
          })
          .catch((err) => {
            reject("Error fetching product details", err);
          });
      });
    },
  },
});
export default store;
