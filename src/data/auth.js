import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const login = async (user) => {
    let res = await axiosInstance.post(Apis.loginUrl, user);
    if(res.status === 200){
        console.log(res.data);
        localStorage.setItem("token", res.data.token)
    }
    else if (res.status === 404){
        console.log("No user");
    }
   
}

export const register = async (user) => {
    const res = await axiosInstance.post(Apis.registerUrl, user);
    if(res.status === 200){
        console.log(res.data.message);
    }
    else if (res.status === 404){
        console.log("No user");
    }
   
}

export const profile = async () => {
    const res = await axiosInstance.get(Apis.profileUrl);
    if(res.status === 200){
        if (res.data.name === "JsonWebTokenError"){
            return "Token expired";
        }
        let result = res.data;
        return result;
    }

}

export const forgot = async (email) => {
    const res = await axiosInstance.post(Apis.forgotUrl, email);
    if(res.status === 200){
        console.log(res.data.message);
        return res.data.message;
    }
}

export const resetPassword = async (password, token) => {
    const res = await axiosInstance.post(`${Apis.resetUrl}${token}`, password);
    return res;
}