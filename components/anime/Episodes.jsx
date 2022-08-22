import { useDispatch } from "react-redux";
import { goToEpisode, nextEpisode, prevEpisode } from "../redux/animeSlice";

import GoToEpisodeForm from "../common/GoToEpisodeForm";

import { FaPlay } from "react-icons/fa";

const Episodes = ({ animeData }) => {
	const dispatch = useDispatch();

	const NavButton = () => (
		<>
			<div
				className="flex flex-row w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500 cursor-pointer"
				onClick={() => {
					dispatch(nextEpisode());
				}}
			>
				<span className="flex flex-row items-center">
					<h4 className="text-lg font-normal py-2 ml-2">Next Episode</h4>
				</span>
			</div>
			<div
				className="flex flex-row gap-2 w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500 cursor-pointer"
				onClick={() => {
					dispatch(prevEpisode());
				}}
			>
				<span className="flex flex-row justify-center items-center">
					<h4 className="text-lg font-normal py-2 ml-2">Prev Episode</h4>
				</span>
			</div>
		</>
	);

	return (
		<div className="text-slate-200 text-left max-h-[80vh]">
			<h1 className="text-3xl font-semibold mb-3">Episodes List</h1>
			<div className="py-0 grid grid-rows-[2fr_8fr] overflow-y-auto overflow-x-hidden h-full">
				<div>
					<GoToEpisodeForm animeData={animeData} />
					<NavButton />
				</div>
				<hr className="border-bottom border-1 py-1" />
				<div className="overflow-y-auto overflow-x-hidden px-2">
					{animeData.episodesList.length > 0 ? (
						<>
							{animeData.episodesList.map((episode) => {
								return (
									<div
										className="flex flex-row gap-2 w-full justify-center
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500 cursor-pointer"
										key={episode.episodeNum}
										onClick={() => {
											dispatch(goToEpisode(episode.episodeNum));
										}}
									>
										<span className="flex flex-row justify-start items-center">
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
		</div>
	);
};

export default Episodes;
