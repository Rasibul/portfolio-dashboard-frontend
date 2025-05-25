import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import apiRequestHandler from "../../utlis/apiRequestHandler";
import toast from "react-hot-toast";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUpMutation = useMutation({
        mutationFn: async (userData) => {
            return await apiRequestHandler("/register", "POST", userData);
        },
        onSuccess: (data) => {
            toast.success("Sign up successful!");
            if (data?.email) {
                navigate("/");
            }
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Sign up failed!");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        signUpMutation.mutate({ name, email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">Sign Up</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                        disabled={signUpMutation.isLoading}
                    >
                        {signUpMutation.isLoading ? "Signing up..." : "Sign Up"}
                    </button>
                    <Link to="/login">
                        <button
                            type="button"
                            className="w-full py-2 text-blue-500 font-bold"
                        >
                            Already have an account? Log In
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
