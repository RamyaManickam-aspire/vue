import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000
})

const loginAPI = axios.create({
  baseURL: 'http://localhost:3000/'
})

apiClient.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.error('API call error:', error)
    return Promise.reject(error)
  }
)

export const fetchProducts = async () => {
  return await apiClient.get('/products')
}

export const fetchProductById = async (id) => {
  return await apiClient.get(`/products/${id}`)
}

loginAPI.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

loginAPI.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.error('API call error:', error)
    return Promise.reject(error)
  }
)

export const checkUserAuthentication = async (email, password) => {
  return await loginAPI.post('api/login', { email, password })
}
