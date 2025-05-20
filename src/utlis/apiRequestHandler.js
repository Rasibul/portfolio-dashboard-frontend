import axios from "axios";

const apiRequestHandler = async (routePath, method, data = null) => {
    try {
        const axiosInstance = axios.create({
            // Base URL for your API
            baseURL: `${import.meta.env.VITE_BASE_URL}/api/starlit/v1`,
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