import axiosInstance from "../configs/axios.config"

export const getLocations = async () => {
    const res = await axiosInstance.get('/locations/popular');
    if(res.status === 200){
        let result = res.data.data;
        return result;
    }
    
}
