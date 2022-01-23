import axiosInstance from "../configs/axios.config"

export const getLocations = async () => {
    await axiosInstance.get('/locations')
    .then(res => {
        console.log(res.data.data);
        return res.data.data;
    })
    .catch(err => {
       return err; 
    });
}
