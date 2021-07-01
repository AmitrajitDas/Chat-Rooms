import axios from 'axios'

const API = axios.create({ baseURL: 'https://chat-rooms-backend.herokuapp.com/api/auth' })

const config = {

    headers: {
        'Content-Type': 'application/json',
    },
}

export const userLogin = (email, password) => API.post('/login', {email, password}, config)

export const userRegister = (name, email, password) => API.post('/register', {name, email, password}, config)