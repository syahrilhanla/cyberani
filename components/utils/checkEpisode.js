const checkEpisode = (episodeInput, animeData) => {
	let episodesList;
	let errorMessage = "";

	if (animeData) {
		episodesList = animeData.episodesList.map((episode) => episode.episodeNum);
	}
	// check if there's the episode user looking for
	if (episodesList.length > 0) {
		// if not found then set error message
		if (episodeInput) {
			console.log({ episodeInput });
			if (!episodesList.find((episodeIndex) => episodeIndex == episodeInput)) {
				errorMessage = "Episode Not Found!";
			}
		}
	}
	return { errorMessage };
};

export default checkEpisode;
