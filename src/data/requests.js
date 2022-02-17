import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const getUserRequests = async () => {
    const res = await axiosInstance.get(Apis.requestsUrl);
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
}

export const acceptRequest = async (trip, id) => {
    const res = await axiosInstance.put(`requests/${id}/accept`, trip);
    return res.data.message;
}

export const declineRequest = async (trip, id) => {
    const res = await axiosInstance.put(`requests/${id}/decline` , trip );
    return res.data.message;
}
