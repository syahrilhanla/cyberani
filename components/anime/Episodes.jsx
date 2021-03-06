import { FaPlay } from "react-icons/fa";

const Episodes = ({ animeData, setCurrentEpisode }) => {
	return (
		<div className="text-slate-200 text-left mt-3">
			<h1 className="text-3xl font-semibold mb-3">Episodes List</h1>
			<div className="py-0 bg overflow-y-auto overflow-x-hidden max-h-[70vh]">
				{animeData.episodesList.length > 0 ? (
					animeData.episodesList.map((episode) => {
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
					})
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
