import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5cc06b1b527aa344b51c3367'
})

export default httpClient