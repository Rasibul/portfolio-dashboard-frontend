import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Dashboard from "../dashboard/Dashboard";
import CreateProject from "../dashboard/dashBoardPages/createProject/CreateProject";
import AddSkills from "../dashboard/dashBoardPages/addSkills/AddSkills";
import AddExperience from "../dashboard/dashBoardPages/addExperience/AddExperince";
import CreateBlogs from "../dashboard/createBlogs/CreateBlogs";

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
	},

	{
		path: "dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "create-project",
				element: <CreateProject />,
			},
			{
				path: "add-skills",
				element: <AddSkills />,
			},
			{
				path: "add-experience",
				element: <AddExperience />,
			},
			{
				path: "create-blogs",
				element: <CreateBlogs />,
			},

		],
	}
]);

export default router;
