import { useDispatch } from "react-redux";
import { goToEpisode, nextEpisode, prevEpisode } from "../redux/animeSlice";
import GoToEpisodeForm from "../common/GoToEpisodeForm";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Episodes = ({ animeData }) => {
	const dispatch = useDispatch();

	const NavButton = () => (
		<div className="flex gap-2 w-full justify-center mt-2">
			<button
				className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold shadow hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
				onClick={() => dispatch(prevEpisode())}
			>
				<FaChevronLeft /> Prev
			</button>
			<button
				className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow hover:scale-105 hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
				onClick={() => dispatch(nextEpisode())}
			>
				Next <FaChevronRight />
			</button>
		</div>
	);

	return (
		<div className="bg-[#16213e]/80 rounded-2xl shadow-xl p-6 text-slate-200 max-h-[80vh] flex flex-col">
			<div className="sticky top-0 z-20 bg-[#16213e]/90 rounded-t-2xl pb-2 mb-2">
				<h1 className="text-2xl font-bold mb-2 text-blue-200 tracking-wide">
					Episodes List
				</h1>
				<div className="flex flex-col gap-2">
					<GoToEpisodeForm animeData={animeData} />
					<NavButton />
				</div>
				<hr className="border-blue-900/40 my-3" />
			</div>
			<div className="flex-1 overflow-y-auto px-1 custom-scrollbar">
				{animeData.episodes.length > 0 ? (
					<div className="space-y-2">
						{animeData.episodes.map((episode) => (
							<button
								key={episode.number}
								className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-900/80 to-blue-700/60 text-blue-100 font-medium shadow hover:scale-[1.02] hover:bg-blue-800/80 hover:text-white transition-all duration-300 group"
								onClick={() => dispatch(goToEpisode(episode.number))}
							>
								<FaPlay className="text-blue-400 group-hover:text-pink-400 transition" />
								<span className="text-base">Episode {episode.number}</span>
							</button>
						))}
					</div>
				) : (
					<div className="flex flex-row gap-2 w-full justify-center rounded-lg bg-blue-900/60 text-blue-200 my-2 py-4">
						<h4 className="text-lg font-normal">No Episode</h4>
					</div>
				)}
			</div>
		</div>
	);
};

export default Episodes;
