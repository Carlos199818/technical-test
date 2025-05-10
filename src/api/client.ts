import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity"
});

export default axiosInstance;