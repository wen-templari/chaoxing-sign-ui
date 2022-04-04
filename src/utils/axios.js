import axios from "axios"

const defaultBaseUrl = 'http://localhost:5000'
axios.defaults.baseURL = localStorage.getItem('baseUrl') || defaultBaseUrl

export default axios