const fetchAnimeList = async (category, page = 1) => {
	const data = await fetch(
		`https://gogoanime.herokuapp.com/${category}/?page=${page}`
	);
	const results = await data.json();
	return results;
};

const fetchAnimeDetails = async (animeId) => {
	const data = await fetch(
		`https://gogoanime.herokuapp.com/anime-details/${animeId}`
	);
	const results = await data.json();
	return results;
};

const fetchAnimeEpisode = async (episodeId) => {
	const data = await fetch(
		`https://gogoanime.herokuapp.com/vidcdn/watch/${episodeId}`
	);
	const results = await data.json();
	return results;
};

const fetchAnimeQuery = async (searchQuery) => {
	const data = await fetch(
		`https://gogoanime.herokuapp.com/search?keyw=${searchQuery}`
	);
	const results = await data.json();
	return results;
};

export {
	fetchAnimeList,
	fetchAnimeDetails,
	fetchAnimeEpisode,
	fetchAnimeQuery,
};
