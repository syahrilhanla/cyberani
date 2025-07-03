import { useEffect, useState } from "react";

import AnimeCardEpisode from "../common/AnimeCardEpisode";
import AnimeCardShowroom from "../common/AnimeCardShowroom";
import Pagination from "../common/Pagination";
import AnimeCardSkeleton from "../common/AnimeCardSkeleton";

import { fetchAnimeList } from "../utils/fetchAnime";

const DisplayCategory = ({ categoryName, category, animeType }) => {
	const [animeData, setAnimeData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [totalPages, setTotalPages] = useState(0);

	const fetchData = async () => {
		setLoading(true);
		const { results, totalPages } = await fetchAnimeList(category, currentPage);
		setAnimeData(results);
		setTotalPages(totalPages);
		setLoading(false);
	};

	// fetch data when initializing component
	useEffect(() => {
		fetchData();
	}, [currentPage]);

	return (
		<div className="w-[90%] lg:w-full p-3 my-6 flex flex-col justify-center items-center">
			<div className="lg:w-[70%] ml-3 mb-4">
				<h1 className="text-left text-slate-200 text-3xl font-semibold">
					{categoryName}
				</h1>
			</div>
			<div
				className="lg:w-[70%] grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5
     mt-2 mb-4 text-left font-medium text-slate-100 pb-2"
			>
				{loading ? (
					<>
						<div className="flex lg:gap-4 gap-2 justify-center items-center h-64 col-span-5">
							<AnimeCardSkeleton />
						</div>
						<div className="flex lg:gap-4 gap-2 justify-center items-center h-64 col-span-5">
							<AnimeCardSkeleton />
						</div>
					</>
				) : (
					<>
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
					</>
				)}
			</div>
			{loading ? null : (
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	);
};

export default DisplayCategory;
