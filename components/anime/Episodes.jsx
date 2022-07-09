import { FaPlay } from "react-icons/fa";

const Episodes = ({ animeData, setCurrentEpisode }) => {
	return (
		<div className="text-slate-200 text-left mt-3">
			<h1 className="text-3xl font-semibold mb-3">Episodes List</h1>
			<div className="py-0 bg">
				{animeData.episodesList &&
					animeData.episodesList.reverse().map((episode) => {
						return (
							<div
								className="flex flex-row gap-2 w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500"
							>
								<span className="flex flex-row justify-center items-center">
									<FaPlay />
									<h4
										className="text-lg font-normal py-2 ml-2 cursor-pointer"
										key={episode.episodeNum}
										onClick={() => setCurrentEpisode(episode.episodeNum)}
									>
										Episode {episode.episodeNum}
									</h4>
								</span>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Episodes;
