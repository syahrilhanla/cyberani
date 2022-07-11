import { useEffect, useState } from "react";
import AnimeCardEpisode from "../common/AnimeCardEpisode";
import AnimeCardShowroom from "../common/AnimeCardShowroom";
import Pagination from "../common/Pagination";
import { fetchAnimeList } from "../utils/fetchAnime";

const DisplayCategory = ({ categoryName, category, animeType }) => {
	const [animeData, setAnimeData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	// fetch data when initializing component
	useEffect(() => {
		const fetchData = async () => {
			const results = await fetchAnimeList(category, currentPage);
			setAnimeData(results);
		};
		fetchData();
		console.log({ currentPage });
	}, [currentPage]);

	return (
		<div className="w-[90%] md:w-full p-3 my-6 flex flex-col justify-center items-center">
			<div className="md:w-[70%] ml-3 mb-4">
				<h1 className="text-left text-slate-200 text-3xl font-semibold">
					{categoryName}
				</h1>
			</div>
			<div
				className="md:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
     mt-2 text-left font-medium text-slate-100 pb-2"
			>
				{/* if data results come as series and not as an episode than render AnimeShowroom */}
				{animeType === "title" &&
					animeData &&
					animeData.map((data) => (
						<AnimeCardShowroom data={data} key={data.animeTitle} />
					))}
				{/* if data results come as episodes than render AnimeCardEpisode */}
				{animeType === "episode" &&
					animeData &&
					animeData.map((data) => (
						<AnimeCardEpisode data={data} key={data.animeTitle} />
					))}
			</div>
			<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</div>
	);
};

export default DisplayCategory;
