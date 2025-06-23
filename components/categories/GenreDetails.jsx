import { useEffect, useState } from "react";
import { fetchAnimeGenre } from "../utils/fetchAnime";
import Meta from "../common/Meta";
import AnimeCardShowroom from "../common/AnimeCardShowroom";
import Pagination from "../common/Pagination";

const GenreDetails = ({ genre }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [animeData, setAnimeData] = useState([]);

	const capitalizedWord = (word) => {
		const firstLetter = word.split("")[0].toUpperCase();
		const newWord = word.split("");
		newWord[0] = firstLetter;
		return newWord.join("");
	};

	const fetchData = async () => {
		const results = await fetchAnimeGenre(genre, currentPage);
		setAnimeData(results);
	};
	// fetch data when initializing component
	useEffect(() => {
		fetchData();
	}, [currentPage]);
	return (
		<>
			<Meta
				title={`${capitalizedWord(genre)} - CyberAni`}
				description={"Watch the latest released anime here for free!"}
			/>
			<div className="w-[90%] lg:w-full p-3 my-6 flex flex-col justify-center items-center">
				<div className="lg:w-[70%] ml-3 mb-4">
					<h1 className="text-left text-slate-200 text-3xl font-semibold">
						{capitalizedWord(genre)}
					</h1>
				</div>
				<div
					className="lg:w-[70%] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
     mt-2 text-left font-medium text-slate-100 pb-2"
				>
					{/* if data results come as series and not as an episode than render AnimeShowroom */}
					{animeData &&
						animeData.map((data) => (
							<AnimeCardShowroom data={data} key={data.animeTitle} />
						))}
				</div>
				<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</div>
		</>
	);
};

export default GenreDetails;
