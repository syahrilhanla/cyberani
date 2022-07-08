import { useState } from "react";
import Link from "next/link";

import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const setMobileNavbar = () => {
		if (!navbar) {
			return "md:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen ml-[-110%] duration-500";
		} else
			return "md:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen duration-500";
	};

	return (
		<div className="fixed h-[78px] w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
			<div className=" hidden sm:flex justify-around items-center md:w-fit">
				<div className="ml-4 w-fit h-16 flex items-center text-2xl font-light logo">
					<Link href={"/"}>CyberAni</Link>
				</div>

				{/* Menu */}
				<ul className="hidden md:flex justify-between min-w-max gap-6 ml-14 font-medium">
					<li>
						<Link href={"/popular"}>Popular</Link>
					</li>
					<li>
						<Link href={"/latest"}>Latest</Link>
					</li>
					<li>
						<Link href={"/trending"}>Trending</Link>
					</li>
					<li>
						<Link href={"/genres"}>Genre</Link>
					</li>
					<li>
						<Link href={"/"}>Schedule</Link>
					</li>
				</ul>
			</div>

			{/* Search Bar */}
			<div
				className="flex flex-row justify-between
      border-gray-200 border-b items-center md:mr-10 mr-[-6rem]  text-slate-300"
			>
				<input
					type="text"
					className=" bg-transparent placeholder-shown:font-light focus:w-[150px] focus:mr-[50px] 
           placeholder-gray-400 duration-500 focus:outline-none"
					placeholder="Search"
				/>
				<FaSearch />
			</div>

			{/* ======================= MOBILE LAYOUT ============================ */}
			{/* Hamburger */}
			<div className=" flex md:hidden z-10 cursor-pointer">
				{navbar ? (
					<>
						<FaTimes onClick={() => setNavbar((prevValue) => !prevValue)} />
					</>
				) : (
					<FaBars onClick={() => setNavbar((prevValue) => !prevValue)} />
				)}
			</div>

			{/* Mobile Menu */}
			<ul className={setMobileNavbar()}>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<Link href={"/popular"}>Popular</Link>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<Link href={"/latest"}>Latest</Link>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<Link href={"/trending"}>Trending</Link>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<Link href={"/genres"}>Genre</Link>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<Link href={"/"}>Schedule</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
