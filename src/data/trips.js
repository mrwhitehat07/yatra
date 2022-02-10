import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const getUserTrips = async () => {
    const res = await axiosInstance.get(Apis.tripsUrl);
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
}

