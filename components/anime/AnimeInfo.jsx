import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";

import { SiMyanimelist } from "react-icons/si";

const AnimeInfo = ({ animeData }) => {
	const [expandDescription, setExpandDescription] = useState(false);

	return (
		<div className="w-full h-fit flex flex-wrap items-start justify-center text-slate-200 bg-[#16213e]/80 backdrop-blur-md rounded-lg shadow-lg p-6">
			{/* Anime Image */}
			{animeData.image && (
				<Image
					src={animeData.image}
					height={360}
					width={278}
					className="rounded-lg shadow-md"
					alt={animeData.title}
				/>
			)}

			{/* Anime Details */}
			<div className="p-4 gap-3 grid grid-cols-1 w-full lg:w-auto">
				<Link to="watch" smooth={true} duration={500}>
					<button
						className="lg:hidden w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md
							hover:scale-105 transition-transform duration-300 font-semibold shadow-md"
					>
						Watch Now
					</button>
				</Link>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`https://myanimelist.net/anime/${animeData.malID}`}
					className="text-sm px-4 py-2 md:-mt-3 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-800/10 to-blue-900 text-white rounded-md
							hover:scale-105 transition-transform duration-300 font-semibold shadow-md"
				>
					<SiMyanimelist size={28} /> More Info
				</a>

				<h2 className="text-lg font-bold text-blue-300">{animeData.title}</h2>
				{animeData.japaneseTitle && (
					<h2 className="text-sm font-medium text-blue-200">
						Other Names: {animeData.japaneseTitle}
					</h2>
				)}
				<h2 className="text-sm text-slate-300">
					Synopsis:{" "}
					<span className={expandDescription ? "" : "line-clamp-1"}>
						{animeData.description}
					</span>
					{animeData.description && animeData.description.length > 120 && (
						<button
							className="text-blue-400 hover:underline focus:outline-none text-xs"
							onClick={() => setExpandDescription((prev) => !prev)}
						>
							{expandDescription ? "Show less" : "Read more"}
						</button>
					)}
				</h2>
				<h2 className="text-sm font-medium text-blue-200">
					<span className="font-normal">Type</span>: {animeData.type}
				</h2>
				<h2 className="text-sm font-medium text-blue-200">
					<span className="font-normal">Status</span>: {animeData.status}
				</h2>
				<h2 className="text-sm font-medium text-blue-200">
					<span className="font-normal">Season</span>: {animeData.season}
				</h2>
				{animeData.type !== "Movie" && (
					<h2 className="text-sm font-medium text-blue-200">
						<span className="font-normal">Total Episodes</span>:{" "}
						{animeData.totalEpisodes}
					</h2>
				)}
				{animeData.genres && (
					<div className="flex flex-wrap gap-2">
						<h2 className="text-sm font-normal text-blue-200">Genres:</h2>
						{animeData.genres.map((genre) => (
							<span
								key={genre}
								className="px-3 py-1 bg-blue-700/50 text-white rounded-full text-xs shadow-md"
							>
								{genre}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default AnimeInfo;
