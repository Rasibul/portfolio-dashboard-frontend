import axios from "axios";

const apiRequestHandler = async (routePath, method, data = null) => {
    try {
        const token = localStorage.getItem("authToken");

        const config = {
            baseURL: "http://localhost:5000/api/v1",
            url: routePath,
            method,
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            ...(data && { data }), // no need to stringify manually
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
};

export default apiRequestHandler;
