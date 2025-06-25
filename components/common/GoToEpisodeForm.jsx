import { useState } from "react";
import { useDispatch } from "react-redux";
import { goToEpisode } from "../redux/animeSlice";
import checkEpisode from "../utils/checkEpisode";

const GoToEpisodeForm = ({ animeData }) => {
	const [episodeInput, setEpisodeInput] = useState(null);
	const { errorMessage } = checkEpisode(episodeInput, animeData);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (episodeInput) {
			// if there's no error then do the dispatch
			if (!errorMessage) dispatch(goToEpisode(episodeInput));
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<span className="flex justify-between">
					<input
						className="w-full bg-transparent placeholder-shown:font-light  
          placeholder-gray-400 focus:outline-none"
						placeholder="Go to episode..."
						value={episodeInput || ""}
						onChange={(e) => {
							// only accept numbers
							const value = e.target.value;
							if (/^\d*$/.test(value)) {
								setEpisodeInput(value ? parseInt(value, 10) : null);
							}
						}}
					/>
					<input
						type="submit"
						value="Go"
						className="bg-[#183868] w-12 px-2 py-1 rounded-full text-sm cursor-pointer"
					/>
				</span>
			</form>
			<p
				className={`${
					errorMessage ? "opacity-100" : "opacity-0"
				} text-red-600 text-xs md:text-sm font-light duration-100`}
			>
				Episode not found
			</p>
		</>
	);
};

export default GoToEpisodeForm;
