import axiosInstance from "../api/client"


export const getRoverPhotos = async () => {

    const response = await axiosInstance.get("/photos?sol=1000&api_key=DEMO_KEY");
    return response.data;

}