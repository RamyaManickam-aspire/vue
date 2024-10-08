// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Adjust this to your app's URL
    supportFile: false // Change to true if you have a support file
  }
})
