import axios from "axios";

const apiRequestHandler = async (routePath, method, data = null) => {
    try {
        const axiosInstance = axios.create({
            // Base URL for your API
            baseURL: "http://localhost:5000/api/v1",
        });

        const url = `${axiosInstance.defaults.baseURL}${routePath}`;

        const config = {
            method,
            url,
            headers: {
                "Content-Type": "application/json",
            },
            ...(data && { data: JSON.stringify(data) }),
        };

        const response = await axiosInstance(config);
        return response.data;
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
};

export default apiRequestHandler;