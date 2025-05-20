;

const Banner = () => {
	return (
		<section className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-4 md:px-12">
			<div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

				{/* Left Content */}
				<div className="flex-1 text-center md:text-left">
					<p className="text-lg md:text-xl text-cyan-400 mb-2">👋 Hi, I'm</p>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Rasibul Islam
					</h1>
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
						Full Stack Developer
					</h2>
					<p className="text-gray-400 mb-6 max-w-xl">
						I build fast, scalable, and secure web apps with modern technologies like React, Node.js, MongoDB, and Express. Let’s craft something amazing together.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<a
							href="#projects"
							className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition"
						>
							🚀 View Projects
						</a>
						<a
							href="#contact"
							className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-medium py-3 px-6 rounded-lg transition"
						>
							📬 Contact Me
						</a>
					</div>
				</div>

				{/* Right Image or Illustration */}
				<div className="flex-1 flex justify-center" >
					<img
						src="https://i.ibb.co/5WMK8yMS/Whats-App-Image-2025-05-20-at-21-57-53-76359334.jpg" // You can replace this with your image or animation
						alt="Developer Illustration"
						className=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
