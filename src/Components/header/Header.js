import React from "react";

const Header = () => {
	return (
		<div className="header">
			<div className="h-screen">
				<div className="text-md font-medium text-green-200">Hi, my name is</div>
				<div className="text-5xl font-bold text-slate-300">
					Brittany Chiang.
				</div>
				<div className="text-5xl font-bold text-slate-500">
					I build things for the web.
				</div>
				<div className="text-normal text-slate-400 w-3/5 py-4">
					I’m a software engineer specializing in building (and occasionally
					designing) exceptional digital experiences. Currently, I’m focused on
					building accessible, human-centered products at Upstatement.
				</div>
				<button className=" px-4 py-4 text-green-200 border-2 rounded-sm cursor-pointer border-emerald-400">
					Check out my course!
				</button>
			</div>
		</div>
	);
};

export default Header;
