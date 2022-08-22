import { FaPlay } from "react-icons/fa";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { goToEpisode, nextEpisode, prevEpisode } from "../redux/animeSlice";
import { useDispatch } from "react-redux";
import GoToEpisodeForm from "../common/GoToEpisodeForm";

const Episodes = ({ animeData }) => {
	const dispatch = useDispatch();

	return (
		<div className="text-slate-200 text-left mt-3 max-h-[80vh]">
			<h1 className="text-3xl font-semibold mb-3">Episodes List</h1>
			<div className="py-0 px-2 overflow-y-auto overflow-x-hidden h-full">
				<GoToEpisodeForm animeData={animeData} />
				{animeData.episodesList.length > 0 ? (
					<>
						<div
							className="flex flex-row gap-2 w-full justify-center 
							rounded-lg bg-[#183868] text-blue-300 my-2
							hover:scale-105 transition-all duration-500 cursor-pointer"
							onClick={() => {
								dispatch(nextEpisode());
							}}
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
							onClick={() => {
								dispatch(prevEpisode());
							}}
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
									onClick={() => {
										dispatch(goToEpisode(episode.episodeNum));
									}}
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
