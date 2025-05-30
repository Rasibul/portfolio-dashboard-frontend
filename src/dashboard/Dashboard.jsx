import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-slate-100">
            {/* Sidebar */}
            <div className="lg:w-1/4 bg-blue-800 text-white p-6 space-y-6">
                <h1 className="text-3xl font-extrabold text-center">Dashboard</h1>
                <ul className="space-y-3">
                    <li>
                        <NavLink
                            to="/dashboard/create-project"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${isActive ? "bg-blue-600" : ""
                                }`
                            }
                        >
                            Create Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/add-skills"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${isActive ? "bg-blue-600" : ""
                                }`
                            }
                        >
                            Add Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/add-experience"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${isActive ? "bg-blue-600" : ""
                                }`
                            }
                        >
                            Add Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/create-blogs"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${isActive ? "bg-blue-600" : ""
                                }`
                            }
                        >
                            Create Blogs
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
