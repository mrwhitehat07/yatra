import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const getUserTrips = async () => {
    const res = await axiosInstance.get(Apis.tripsUrl);
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
}

export const getTripsBySlug = async (slug) => {
    const res = await axiosInstance.get(Apis.tripsUrl + "/" + slug + "/detail");
    if(res.status === 200){
        let result = res.data;
        return result;
    }
    return res;
}

export const inviteToTrip = async (email, id) => {
    const res = await axiosInstance.post(Apis.tripsUrl + "/" + id + "/requests", {email})
    if(res.status === 201){
        return res.message;
    }
    else {
        return res;
    }
}   

export const createUserTrips = async (data) => {
    const res = await axiosInstance.post(Apis.tripsUrl, data);
    if(res.status === 200){
        let result = res.data.message;
        return result;
    }
}
