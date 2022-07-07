const fetchAnime = async (category) => {
	const data = await fetch(`https://gogoanime.herokuapp.com/${category}`);
	const results = await data.json();
	return results;
};

export default fetchAnime;
