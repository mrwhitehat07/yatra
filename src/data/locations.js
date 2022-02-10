import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const getPopularLocations = async () => {
    const res = await axiosInstance.get(Apis.propularLocations);
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
}

export const getLocationsBySlug = async ( slug ) => {
    const res = await axiosInstance.get(`${Apis.singleLocation}${slug}`);
    if(res.status === 200){
        let result = res.data;
        return result;
    }
}
