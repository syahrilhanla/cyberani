import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const AnimeCardEpisode = ({ data }) => {
	return (
		<Link href={`/anime/${data.animeId}`}>
			<div
				className="mb-4 mx-2 md:mb-4 cursor-pointer
          hover:scale-110 transition-all gap-2 duration-500"
			>
				<div className="relative group ">
					<div className="absolute top-0 left-0 z-10 h-[100%] w-full rounded-lg opacity-20 group-hover:opacity-100 duration-300 box-shadow-little flex items-end">
						<div className=" absolute px-3 bottom-3">
							<span className="flex flex-col ">
								<p className="opacity-100 z-50 text-base font-normal">
									{data.animeTitle}
								</p>
								<span className="flex items-center left-3 gap-2">
									<FaPlay /> <p>Episode {data.episodeNum}</p>
								</span>
							</span>
						</div>
					</div>
					<span>
						<img
							src={data.animeImg}
							className="object-cover w-full h-[240px] rounded-xl"
						/>
					</span>
				</div>
			</div>
		</Link>
	);
};

export default AnimeCardEpisode;
