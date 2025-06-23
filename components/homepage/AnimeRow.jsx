import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import AnimeCardShowroom from "../common/AnimeCardShowroom";
import { fetchAnimeList } from "../utils/fetchAnime";
import Link from "next/link";

const AnimeRow = ({ rowTitle, category, animeType, toPage }) => {
	const [animeData, setAnimeData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const { results } = await fetchAnimeList(category);

			setAnimeData(results);
		} catch (error) {
			console.error("Error fetching anime data:", error);
		} finally {
			setLoading(false);
		}
	};
	// fetch data when initializing component
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex flex-col w-[80%] mt-2 text-left font-medium text-slate-200 pb-5 overflow-visible">
			<div className="w-fit">
				<Link href={`/${toPage}`}>
					<h1 className="text-2xl mb-2 ml-2 cursor-pointer hover:text-blue-500 duration-300">
						{rowTitle} -<span className="font-light"> Click for more</span>
					</h1>
				</Link>
			</div>
			<div className="w-full relative overflow-visible">
				{loading ? (
					<div className="flex justify-center items-center h-64">
						<p className="text-slate-400">Loading...</p>
					</div>
				) : (
					<Swiper
						modules={[Navigation]}
						navigation
						slidesPerView={5}
						spaceBetween={10}
						className="anime-row-swiper"
					>
						{animeData.map((anime) => (
							<SwiperSlide key={anime.id} className="pt-3 pb-2">
								<AnimeCardShowroom data={anime} />
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</div>
	);
};

export default AnimeRow;
