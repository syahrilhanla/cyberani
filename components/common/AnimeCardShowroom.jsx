import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const AnimeCardShowroom = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<Link href={`/anime/${data.id}`}>
			<article
				className="group relative w-fit shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden
					cursor-pointer rounded-3xl xl:h-[20rem] h-[14rem]"
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
						className="object-contain duration-500 group-hover:opacity-30 rounded-t-3xl"
						width={270}
						height={380}
					/>
				</div>

				{/* Anime Info */}
				<div className="absolute bottom-1 left-0 right-0 z-20 flex flex-col items-center">
					<h3 className="text-slate-100 hover:text-white font-semibold text-lg text-center truncate w-full drop-shadow-lg whitespace-normal text-ellipsis max-w-[10rem]">
						{data.title}
					</h3>
					<div className="flex items-center gap-1 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
