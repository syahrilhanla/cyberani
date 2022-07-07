import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import AnimeCardShowroom from "../common/AnimeCardShowroom";
import fetchAnime from "../utils/fetchAnime";

const AnimeRow = ({ rowTitle, category }) => {
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
		<div className="flex flex-col w-[90%] mt-2 text-left font-medium text-slate-200 pb-5">
			<h1 className="text-2xl mb-2 ml-2">{rowTitle}</h1>
			<div className="w-full">
				<Swiper
					// install Swiper modules
					slidesPerView={6}
					modules={[Navigation]}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					spaceBetween={10}
					breakpoints={{
						240: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						640: {
							slidesPerView: 6,
							spaceBetween: 10,
						},
					}}
				>
					{animeData &&
						animeData.map((data) => (
							<SwiperSlide key={data.episodeId}>
								<AnimeCardShowroom data={data} />
							</SwiperSlide>
						))}

					<div
						className="swiper-button-next opacity-40 hover:opacity-100 duration-200 mr-[-0.5rem]"
						style={{ color: "#c5c5c5" }}
					></div>
					<div
						className="swiper-button-prev opacity-40 hover:opacity-100 duration-200 ml-[-0.5rem]"
						style={{ color: "#c5c5c5" }}
					></div>
				</Swiper>
			</div>
			{/* <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
			</div> */}
		</div>
	);
};

export default AnimeRow;
