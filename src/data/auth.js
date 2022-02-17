import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const login = async (user) => {
    let res = await axiosInstance.post(Apis.loginUrl, user);
    if(res.status === 200){
        localStorage.setItem("token", res.data.token)
        return res.data.message;
    }
    else if (res.status === 404){
        return "No user";
    }
   
}

export const register = async (user) => {
    const res = await axiosInstance.post(Apis.registerUrl, user);
    if(res.status === 201){
        return res.data.message;
    }
    else if (res.status === 403){
        return res.data.message;
    }
   
}

export const profile = async () => {
    const res = await axiosInstance.get(Apis.profileUrl);
    if(res.status === 200){
        if(res.data.name === "TokenExpiredError"){
            return "Token expired";
        }   
        else {
            return res.data;
        }
    }
    else {
        return res.response.data;
    }
}

export const profileDetail = async () => {
    const res = await axiosInstance.get(Apis.profileDetailUrl);
    if(res.status === 200){
        if(res.data.name === "TokenExpiredError"){
            return "Token expired";
        }   
        else {
            return res.data;
        }
    }
}

export const createProfile = async (data) => {
    const res = await axiosInstance.post(Apis.profileUrl, data);
    if (res.status === 201){ 
        return res.data.message; 
    }
    else if (res.status === 200){
        if(res.data.name === "TokenExpiredError"){
            return "Token expired";
        }   
    }
}

export const updateProfile = async (data) => {
    const res = await axiosInstance.put(Apis.profileUrl, data);
    if(res.status === 200){
        if(res.data.name === "TokenExpiredError"){
            return "Token expired";
        }   
        else {
            return res.data;
        }
    }
}

export const updateProfileImage = async (image) => {
    const res = await axiosInstance.put(Apis.profileImageUrl, image, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    if(res.status === 200){
        if(res.data.name === "TokenExpiredError"){
            return "Token expired";
        }   
        else {
            return res.data;
        }
    }
}

export const forgot = async (email) => {
    const res = await axiosInstance.post(Apis.forgotUrl, email);
    if(res.status === 200){
        console.log(res.data.message);
        return res.data.message;
    }
}

export const resetPassword = async (data, token) => {
    const res = await axiosInstance.post(`${Apis.resetUrl}${token}`, data);
    console.log(data);
    return res;
}

export const logout = (e) => {
    localStorage.setItem("token", "");
    window.location.reload(true);
}