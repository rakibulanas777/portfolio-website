import React from "react";

const Navbar = () => {
	return (
		<div className="nav-bar">
			<div className="flex justify-between items-center">
				<div className="navbar_logo text-2xl cursor-pointer px-10 py-5 font-semibold text-white">
					logo
				</div>
				<div className="navbar_left-items">
					<ul className="items flex items-center gap-4">
						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							className="text-md text-slate-200 px-4 font-medium"
						>
							about
						</a>
						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							className="text-md text-slate-200 px-4 font-medium"
						>
							about
						</a>
						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							className="text-md text-slate-200 px-4 font-medium"
						>
							about
						</a>
						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							className="text-md text-slate-200 px-4 font-medium"
						>
							about
						</a>
						<button className=" px-4 py-2 text-green-200 border-emerald-400">
							resume
						</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
