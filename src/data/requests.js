import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const getUserRequests = async () => {
    const res = await axiosInstance.get(Apis.requestsUrl);
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
}

export const acceptRequest = async (data) => {
    const res = await axiosInstance.post(Apis.tripsUrl, data);
    if(res.status === 200){
        let result = res.data.message;
        return result;
    }
}

export const declineRequest = async (data) => {
    const res = await axiosInstance.post(Apis.tripsUrl, data);
    if(res.status === 200){
        let result = res.data.message;
        return result;
    }
}