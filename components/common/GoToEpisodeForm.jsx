import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { goToEpisode } from "../redux/animeSlice";
import checkEpisode from "../utils/checkEpisode";

const GoToEpisodeForm = ({ animeData }) => {
	const [episodeInput, setEpisodeInput] = useState(null);
	const { errorMessage } = checkEpisode(episodeInput, animeData);
	const dispatch = useDispatch();

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (episodeInput) {
						if (!errorMessage) dispatch(goToEpisode(episodeInput));
					}
				}}
			>
				<span className="grid grid-cols-[6fr_3fr] gap-1 py-1">
					<input
						type="number"
						className="w-full h-12 bg-transparent placeholder-shown:font-light  
          placeholder-gray-400 focus:outline-none"
						placeholder="Go to episode..."
						onChange={(e) => setEpisodeInput(e.target.value)}
					/>
					<input
						type="submit"
						value="Go"
						className="bg-[#183868] rounded-md cursor-pointer"
					/>
				</span>
			</form>
			{errorMessage && (
				<p className="text-red-600 text-xs font-light">{errorMessage}</p>
			)}
		</>
	);
};

export default GoToEpisodeForm;
