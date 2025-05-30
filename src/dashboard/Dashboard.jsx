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
                            to="/dashboard/create-task"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${isActive ? "bg-blue-600" : ""
                                }`
                            }
                        >
                            Create Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/to-do-list"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${isActive ? "bg-blue-600" : ""
                                }`
                            }
                        >
                            Todo
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 p-6 text-center ">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Welcome to Your Dashboard
                    </h2>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
