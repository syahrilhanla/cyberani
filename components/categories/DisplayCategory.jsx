import { useEffect, useState } from "react";
import AnimeCardShowroom from "../common/AnimeCardShowroom";
import GenreCard from "../common/GenreCard";
import fetchAnime from "../utils/fetchAnime";
import genresData from "./genresData";

const DisplayCategory = ({ categoryName, category }) => {
	const [animeData, setAnimeData] = useState([]);

	// fetch data when initializing component
	useEffect(() => {
		const fetchData = async () => {
			const results = await fetchAnime(category);
			setAnimeData(results);
		};
		fetchData();
	}, []);

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
				{animeData &&
					animeData.map((data) => (
						<AnimeCardShowroom data={data} />
						// <GenreCard genre={genre} />
					))}
			</div>
		</div>
	);
};

export default DisplayCategory;
