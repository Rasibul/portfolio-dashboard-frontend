import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../../utlis/logOut";


const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		setIsLoggedIn(!!token);
	}, []);

	const handleLogout = () => {
		logout();
		setIsLoggedIn(false);
		navigate("/login");
	};

	return (
		<>
			<header className="relative z-20 w-full   after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full  lg:backdrop-blur-sm lg:after:hidden">
				<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
					<nav
						aria-label="main navigation"
						className="flex h-[5.625rem] items-center justify-between font-medium text-[#1F1F1F"
						role="navigation">
						<div className="hidden lg:flex items-center gap-3 ">
							<div>
								<h1 className="text-xl text-black font-bold">Portfolio Dashboard</h1>
							</div>
						</div>
						<ul
							role="menubar"
							aria-label="Select page">
							{isLoggedIn ? (
								<>
									<Link to="dashboard">
										<li className="text-black text-lg">Dashboard</li>
									</Link>
									<li onClick={handleLogout}
										className="text-red-600 cursor-pointer text-lg">
										Logout
									</li>
								</>
							) : (
								<Link to="/login">
									<button className="transition-all duration-200 ease-linear text-black px-8 py-[10px] rounded-[5px]   text-xl hover:bg-gradient-to-r hover:from-[#87CEEB] hover:to-[#00BFFF] hover:text-white border border-[#87CEEB] w-full ">
										login
									</button>
								</Link>
							)}

						</ul>
					</nav>
				</div >
			</header >
		</>
	);
};


export default Navbar;
