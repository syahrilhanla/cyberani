import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AnimeCardShowroom = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<Link href={`/anime/${data.id}`}>
			<article
				className="group relative p-0 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden w-full max-w-xs mx-auto rounded-3xl min-h-[12rem]"
				onClick={() => {
					dispatch({ type: "anime/selectAnime", payload: data.title });
					dispatch({ type: "anime/goToEpisode", payload: 1 });
				}}
			>
				{/* Anime Image */}
				<div className="overflow-hidden rounded-t-3xl">
					<Image
						src={data.image}
						alt={data.title}
						className="object-cover w-full h-64 duration-700 group-hover:opacity-30 rounded-t-3xl"
						width={250}
						height={320}
					/>
				</div>

				{/* Anime Info */}
				<div className="absolute bottom-4 left-0 right-0 z-20 px-4 flex flex-col items-center">
					<h3 className="text-slate-100 hover:text-white font-semibold text-lg text-center truncate w-full mb-1 drop-shadow-lg">
						{data.title}
					</h3>
					<div className="flex items-center gap-2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
						{data.rating && (
							<span className="flex items-center">
								<FaStar color="orange" />
								{data.rating}
							</span>
						)}
						{data.type && (
							<span className="px-2 py-0.5 rounded-full">{data.type}</span>
						)}
					</div>
				</div>
			</article>
		</Link>
	);
};

export default AnimeCardShowroom;
