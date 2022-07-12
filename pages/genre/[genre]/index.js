import { fetchAnimeGenre } from "../../../components/utils/fetchAnime";
import Meta from "../../../components/common/Meta";
import AnimeCardShowroom from "../../../components/common/AnimeCardShowroom";
import Pagination from "../../../components/common/Pagination";
import { useEffect, useState } from "react";

const genrePage = ({ genre }) => {
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
			<div className="w-[90%] md:w-full p-3 my-6 flex flex-col justify-center items-center">
				<div className="md:w-[70%] ml-3 mb-4">
					<h1 className="text-left text-slate-200 text-3xl font-semibold">
						{capitalizedWord(genre)}
					</h1>
				</div>
				<div
					className="md:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
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

export const getServerSideProps = async ({ res, params }) => {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	return {
		props: { genre: params.genre },
	};
};

export default genrePage;
