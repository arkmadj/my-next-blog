const Banner = () => {
	return (
		<div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
			<div>
				<h1 className="text-7xl">Zultans daily blog</h1>
				<h2 className="mt-5 md:mt-0">
					Welcome to{" "}
					<span className="underline decoration-4 decoration-[#772CE8]">
						Every developer
					</span>{" "}
					favorite blog in the Devosphere
				</h2>
			</div>
			<p className="max-w-sm mt-5 text-gray-400 md:mt-2">
				New product features | The latest in technology | The weekly debugging
				nightmares & more!
			</p>
		</div>
	);
};

export default Banner;
