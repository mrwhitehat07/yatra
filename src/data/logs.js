import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const getUserLogs = async () => {
    const res = await axiosInstance.get(Apis.logsUrl);
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
}

export const getLogsBySlug = async ( slug ) => {
    const res = await axiosInstance.get(`${Apis.singleLog}${slug}`);
    if(res.status === 200){
        let result = res.data;
        return result;
    }
}
