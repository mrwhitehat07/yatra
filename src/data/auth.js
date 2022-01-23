import axiosInstance from "../configs/axios.config"

export const login = async (user) => {
    await axiosInstance.post('/login', user)
    .then(res => {
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

export const register = (user) => {
    axiosInstance.post('/register', user)
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
