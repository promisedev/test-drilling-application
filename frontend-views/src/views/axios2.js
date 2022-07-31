import axios from 'axios'

const Instance = axios.create({
    baseURL:'http://localhost:9009/api/v1'
})

export default Instance