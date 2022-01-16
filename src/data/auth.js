import axiosInstance from "../configs/axios.config"

export const login = async (user) => {
    await axiosInstance.post('/login', user)
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
}

export const register = (user) => {
    axiosInstance.post('/register')
    .then()
    .catch()
}
