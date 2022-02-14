import axiosInstance from "../configs/axios.config";
import Apis from "../utils/apis";

export const getUserLogs = async () => {
    const res = await axiosInstance.get(Apis.mylogsUrl);
    if(res.status === 200){
        let result = res.data;
        return result;
    }
}

export const getAllLogs = async () => {
    const res = await axiosInstance.get(Apis.logsUrl);
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
}

export const getPopularLogs = async () => {
    const res = await axiosInstance.get(Apis.popularLogsUrl);
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

export const createLogs = async (formData) => {
    const res = await axiosInstance.post(Apis.logsUrl, formData);
    if (res.status === 201 ) {
        return res.data.message;
    }
    else {
        return "Something went wrong";
    }
}
