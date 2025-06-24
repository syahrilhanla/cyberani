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
		`${process.env.NEXT_PUBLIC_API_URL}/info?id=${animeId}`
	);
	const results = await data.json();
	return results;
};

// currently not used, for future reference only
const fetchAnimeEpisode = async (episodeId) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/watch/${episodeId}` // Adjust server as needed
	);
	const results = await data.json();
	return results;
};

const fetchAnimeQuery = async (searchQuery) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/${searchQuery}`
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
