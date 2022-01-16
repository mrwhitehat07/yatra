
import axios from "axios";
// const access_token = localStorage.getItem('access_token');

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer '+access_token
    }
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'

export default axiosInstance;