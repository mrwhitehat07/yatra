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

export const updateLogs = async (slug, data) => {
    const res = await axiosInstance.put(Apis.logsUrl + `/${slug}`, data);
    return res.data.message;
}

export const updateLogImage = async (slug, data) => {
    const res = await axiosInstance.put(Apis.logsUrl + `/${slug}/image`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data.message;
}

export const deleteLogs = async (slug) => {
    const res = await axiosInstance.delete(Apis.logsUrl + `/${slug}`);
    if (res.status === 204){
        return res.data.message || "deleted";
    }
}