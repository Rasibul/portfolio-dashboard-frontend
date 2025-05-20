import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

	const [isToggleOpen, setIsToggleOpen] = useState(false);

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
						{/*      <!-- Mobile trigger --> */}
						<button
							className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
									? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
									: ""
								}
              `}
							onClick={() => setIsToggleOpen(!isToggleOpen)}
							aria-expanded={isToggleOpen ? "true" : "false"}
							aria-label="Toggle navigation">
							<div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 -translate-y-2 transform rounded-full bg-[#B9083D] transition-all duration-300"></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 transform rounded-full bg-[#B9083D] transition duration-300"></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 origin-top-left translate-y-2 transform rounded-full bg-[#B9083D] transition-all duration-300"></span>
							</div>
						</button>
						{/*      <!-- Navigation links --> */}
						<ul
							role="menubar"
							aria-label="Select page"
							className={`absolute flex flex-col lg:flex-row left-0 top-0 z-[-1] h-[35rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-center gap-10 lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
								}`}>
							<Link to="/login">
								<button className="transition-all duration-200 ease-linear text-black px-8 py-[10px] rounded-[5px]   text-xl hover:bg-gradient-to-r hover:from-[#87CEEB] hover:to-[#00BFFF] hover:text-white border border-[#87CEEB] w-full ">
									login
								</button>
							</Link>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
