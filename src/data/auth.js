import axiosInstance from "../configs/axios.config"

export const login = async (user) => {
    await axiosInstance.post('/login', user)
    .then(res => {
        if(res.status === 200){
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
        }
        else if (res.status === 404){
            console.log("No user");
        }
    })
    .catch(err => {
        console.log("Something went wrong")
    });
}

export const register = async (user) => {
    await axiosInstance.post('/register', user)
    .then( res => {
        if(res.status === 200){
            console.log(res.data.message);
        }
        else if (res.status === 404){
            console.log("No user");
        }
    })
    .catch(err => {
        console.log("Something went wrong")
    });
}

export const forgot = async (email) => {
    await axiosInstance.post('/forgot-password', email)
    .then(res => {
        if(res.status === 200){
            console.log(res.data.message);
            return res.data.message;
        }
    })
    .catch(err => {

    });
}

export const resetPassword = async (password, token) => {
    await axiosInstance.post(`/reset-password/${token}`, password)
    .then(res => {
        console.log(res.data.message);
    })
    .catch(err => {

    })
}