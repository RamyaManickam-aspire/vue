import { createStore } from 'vuex'

const store = createStore({
  state: {
    cartItems: [],
    user: null
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cartItems.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += product.quantity
      } else {
        state.cartItems.push({ ...product, quantity: product.quantity })
      }
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== productId)
    },
    // updateQuantity(state, { productId, quantity }) {
    //   const product = state.cartItems.find((item) => item.id === productId)
    //   if (product) {
    //     product.quantity = quantity
    //   }
    // },
    setUser(state, user) {
      state.user = user
    }
    // logout(state) {
    //   state.user = null
    // }
  },
  getters: {
    cartItems(state) {
      return state.cartItems
    },
    cartCount(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotalPrice(state) {
      return state.cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)
    },
    isAuthenticated(state) {
      return !!state.user
    }
  }
})

export default store
