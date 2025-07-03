import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import AnimeCardShowroom from "../common/AnimeCardShowroom";
import { fetchAnimeList } from "../utils/fetchAnime";
import useWindowDimensions from "../utils/useWindowDimensions";

const AnimeCardSkeleton = () => (
	<div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-700 animate-pulse rounded-lg flex flex-col justify-end items-center p-4 gap-2">
		<div className="h-4 w-full bg-slate-600 rounded-full" />
		<div className="h-4 w-2/3 bg-slate-600 rounded-full" />
	</div>
);

const AnimeRow = ({ rowTitle, category, animeType, toPage }) => {
	const [animeData, setAnimeData] = useState([]);
	const [loading, setLoading] = useState(true);

	const { width } = useWindowDimensions();

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

	const slidesPerView =
		width < 640 ? 2 : width < 768 ? 3 : width < 1024 ? 3 : width < 1280 ? 5 : 5;

	return (
		<div className="flex flex-col w-[90%] lg:w-[80%] mt-2 text-left font-medium text-slate-200 pb-5 overflow-visible">
			<div className="w-fit">
				<Link href={`/${toPage}`}>
					<h1 className="text-2xl mb-2 ml-2 cursor-pointer hover:text-blue-500 duration-300">
						{rowTitle} -<span className="font-light"> Click for more</span>
					</h1>
				</Link>
			</div>
			<div className="w-full relative overflow-visible">
				{1 ? (
					<div className="flex lg:gap-4 gap-2 justify-center items-center h-64">
						{[...Array(slidesPerView)].map((_, index) => (
							<AnimeCardSkeleton key={index} />
						))}
					</div>
				) : (
					<Swiper
						modules={[Navigation]}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						slidesPerView={slidesPerView}
						spaceBetween={5}
						className="anime-row-swiper overflow-visible"
					>
						{animeData.map((anime) => (
							<SwiperSlide
								key={anime.id}
								className="pt-3 pb-2 overflow-visible"
							>
								<AnimeCardShowroom data={anime} />
							</SwiperSlide>
						))}
						<div
							className="swiper-button-next opacity-25 hover:opacity-70 duration-200"
							style={{ color: "#c5c5c5" }}
						></div>
						<div
							className="swiper-button-prev opacity-25 hover:opacity-70 duration-200"
							style={{ color: "#c5c5c5" }}
						></div>
					</Swiper>
				)}
			</div>
		</div>
	);
};

export default AnimeRow;
