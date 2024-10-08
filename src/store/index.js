import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Laptop', price: 999.99 },
      { id: 2, name: 'Smartphone', price: 499.99 },
      { id: 3, name: 'Headphones', price: 199.99 }
    ],
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find((item) => item.id === product.id)
      if (item) {
        item.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  },
  actions: {
    addToCart({ commit }, product) {
      setTimeout(() => {
        commit('ADD_TO_CART', product)
      }, 1000)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    }
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    cartItemCount: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
})
