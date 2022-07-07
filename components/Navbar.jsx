import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const setMobileNavbar = () => {
		if (!navbar) {
			return "md:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen ml-[-110%] duration-500";
		} else
			return "absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen duration-500";
	};

	return (
		<div className="fixed h-[78px] w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
			<div className=" hidden sm:flex justify-between items-center md:w-[45%]">
				<div className="ml-4 w-16 h-16 flex items-center text-2xl font-light logo">
					<Link href={"/"}>CyberAni</Link>
				</div>

				{/* Menu */}
				<ul className="hidden md:flex justify-between min-w-max gap-6 ml-20 font-medium">
					<li>Anime List</li>
					<li>Latest</li>
					<li>Trending</li>
					<li>Top</li>
					<li>Genre</li>
					<li>Schedule</li>
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
					Anime List
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					Latest
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					Trending
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					Top
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					Genre
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					Schedule
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
