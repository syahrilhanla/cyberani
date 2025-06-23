const fetchAnimeList = async (category, page = 1) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/${category}`
	);
	const results = await data.json();
	return results;
};

const fetchAnimeGenre = async (category, page = 1) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/genre/${category}/?page=${page}`
	);
	const results = await data.json();
	return results;
};

const fetchAnimeDetails = async (animeId) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/anime-details/${animeId}`
	);
	const results = await data.json();
	return results;
};

const fetchAnimeEpisode = async (episodeId) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/vidcdn/watch/${episodeId}`
	);
	const results = await data.json();
	return results;
};

const fetchAnimeQuery = async (searchQuery) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/search?keyw=${searchQuery}`
	);
	const results = await data.json();
	return results;
};

export {
	fetchAnimeList,
	fetchAnimeDetails,
	fetchAnimeEpisode,
	fetchAnimeQuery,
	fetchAnimeGenre,
};
