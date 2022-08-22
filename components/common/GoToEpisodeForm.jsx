import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { goToEpisode } from "../redux/animeSlice";

const GoToEpisodeForm = () => {
	const [episodeInput, setEpisodeInput] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage(null);
			}, 3000);
		}
	}, [errorMessage]);

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (episodeInput) {
						dispatch(goToEpisode(episodeInput));
					} else setErrorMessage("There's no episode");
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
			{errorMessage === "There's no episode" && (
				<p className="text-red-600 text-xs font-light">No episode</p>
			)}
		</>
	);
};

export default GoToEpisodeForm;
