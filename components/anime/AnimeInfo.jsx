import Image from "next/image";
import { Link } from "react-scroll";

const AnimeInfo = ({ animeData }) => {
	return (
		<div
			className="w-full h-fit flex flex-wrap 
		items-start justify-center text-slate-200 overflow-y-auto"
		>
			{animeData.image && (
				<Image
					src={animeData.image}
					height={360}
					width={278}
					className="rounded-lg"
					alt={animeData.title}
				/>
			)}
			<div className="p-4 gap-3 grid grid-cols-1">
				<Link to="watch" smooth={true} duration={500}>
					<button
						className="lg:hidden px-2 py-1 bg-sky-800 text-sky-100 rounded-md
				hover:scale-105 transition-all duration-500 min-w-full
				"
					>
						Watch Now
					</button>
				</Link>
				<h1>Title: {animeData.title}</h1>
				{animeData.japaneseTitle && (
					<h1>Other Names: {animeData.japaneseTitle}</h1>
				)}
				<h1 className="block lg:hidden">Synopsis: {animeData.description}</h1>
				<h1>Type: {animeData.type}</h1>
				<h1>Status: {animeData.status}</h1>
				{animeData.type !== "Movie" && (
					<h1>Total Episodes: {animeData.totalEpisodes}</h1>
				)}
				{animeData.genres && (
					<h1>
						Genre:{" "}
						{animeData.genres.map((genre, index) => (
							<span key={genre}>
								{genre}
								{index !== animeData.genres.length - 1 && ", "}
							</span>
						))}
					</h1>
				)}
			</div>
		</div>
	);
};

export default AnimeInfo;
