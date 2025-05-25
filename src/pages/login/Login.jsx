import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import apiRequestHandler from "../../utlis/apiRequestHandler";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    // Mutation for login API
    const loginMutation = useMutation({
        mutationFn: async (userData) => {
            // Use the custom API request handler
            return await apiRequestHandler("/user/login", "POST", userData);
        },
        onSuccess: (data) => {
            toast.success("Login successful!");
            if (data?.success && data?.token) {
                localStorage.setItem("authToken", data.token); // Save token
                toast.success("Login successful!");
                navigate("/");
            }

        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Login failed!");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate({ email, password }); // Pass user data to mutation
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">Login</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        disabled={loginMutation.isLoading}
                    >
                        {loginMutation.isLoading ? "Logging in..." : "Log In"}
                    </button>
                    <Link to="/signUp">
                        <button
                            type="button"
                            className="w-full py-2 text-blue-500 font-bold"
                        >
                            if you don't have an account, <br /> <span className="text-underline"> Sign Up</span>
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
