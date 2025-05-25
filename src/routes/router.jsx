import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <>404</>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/signup",
		element: <SignUp />
	}
]);

export default router;
