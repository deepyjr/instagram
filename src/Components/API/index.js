import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertPictures = payload => api.post(`/pictures`, payload)
export const addUser = payload => api.post(`/users`, payload)
export const getAllUsers = () => api.get(`/users`)
export const getUserById = id => api.get(`/users/${id}`)

const apis = {
    insertPictures,
    getAllUsers,
    getUserById,
    addUser
}

export default apis