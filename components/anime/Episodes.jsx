import { FaPlay } from "react-icons/fa";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { nextEpisode, prevEpisode } from "../redux/animeSlice";
import { useSelector, useDispatch } from "react-redux";

const Episodes = ({ animeData, setCurrentEpisode }) => {
	const episode = useSelector((state) => state.animeReducer.episodeNum);
	const dispatch = useDispatch();
	console.log({ episode });

	return (
		<div className="text-slate-200 text-left mt-3">
			<h1 className="text-3xl font-semibold mb-3">Episodes List</h1>
			<div className="py-0 bg overflow-y-auto overflow-x-hidden max-h-[70vh]">
				{animeData.episodesList.length > 0 ? (
					<>
						<div
							className="flex flex-row gap-2 w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500 cursor-pointer"
							onClick={() => dispatch(nextEpisode())}
						>
							<span className="flex flex-row items-center">
								<h4 className="text-lg font-normal py-2 ml-2">Next Episode</h4>
								<AiOutlineRight />
							</span>
						</div>
						<div
							className="flex flex-row gap-2 w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500 cursor-pointer"
							onClick={() => dispatch(prevEpisode())}
						>
							<span className="flex flex-row justify-center items-center">
								<AiOutlineLeft />
								<h4 className="text-lg font-normal py-2 ml-2">Prev Episode</h4>
							</span>
						</div>
						{animeData.episodesList.map((episode) => {
							return (
								<div
									className="flex flex-row gap-2 w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500 cursor-pointer"
									key={episode.episodeNum}
									onClick={() => setCurrentEpisode(episode.episodeNum)}
								>
									<span className="flex flex-row justify-center items-center">
										<FaPlay />
										<h4 className="text-lg font-normal py-2 ml-2">
											Episode {episode.episodeNum}
										</h4>
									</span>
								</div>
							);
						})}
					</>
				) : (
					<div
						className="flex flex-row gap-2 w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500"
					>
						<h4 className="text-lg font-normal py-2 ml-2 cursor-pointer">
							No Episode
						</h4>
					</div>
				)}
			</div>
		</div>
	);
};

export default Episodes;
