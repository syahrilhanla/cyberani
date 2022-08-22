import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { goToEpisode } from "../redux/animeSlice";

const GoToEpisodeForm = ({ animeData }) => {
	const [episodeInput, setEpisodeInput] = useState(null);
	const [episodesList, setEpisodesList] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage(null);
			}, 3000);
		}
	}, [errorMessage]);

	// if episode is available then return true, otherwise false
	const checkForEpisode = (episodeInput) => {
		if (animeData) {
			setEpisodesList(
				animeData.episodesList.map((episode) => episode.episodeNum)
			);
		}
		// check if there's the episode user looking for
		if (episodesList.length > 0) {
			// if not found then set error message
			if (!episodesList.find((episodeIndex) => episodeIndex == episodeInput)) {
				setErrorMessage("Episode Not Found!");
				return false;
			}
		}
		return true;
	};

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (episodeInput) {
						if (checkForEpisode(episodeInput))
							dispatch(goToEpisode(episodeInput));
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
