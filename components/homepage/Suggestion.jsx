import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

import Jumbotron from "./Jumbotron";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { fetchAnimeList } from "../utils/fetchAnime";

const Suggestion = () => {
	const [topAiringList, setTopAiringList] = useState([]);

	useEffect(() => {
		const fetchTopAiring = async () => {
			const { results } = await fetchAnimeList("suggestions");

			console.log(results);

			setTopAiringList(
				results.map((anime) => ({
					imgURL: anime.image,
					yearRelease: anime.season,
					title: anime.title,
					link: `/anime/${anime.id}`,
					genre: anime.genres.join(", "),
					description: anime.description,
				}))
			);
		};

		fetchTopAiring();
	}, []);

	console.log(topAiringList);

	return (
		<div className="w-[95%] mb-7">
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Autoplay]}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				autoplay={{ delay: 3500 }}
				pagination={{ el: ".swiper-pagination", clickable: true }}
				spaceBetween={100}
				centeredSlides={true}
				centeredSlidesBounds={true}
				slidesPerView={1}
				speed={500}
			>
				{topAiringList.map((data) => (
					<SwiperSlide key={data.title}>
						<Jumbotron data={data} />
					</SwiperSlide>
				))}
				<div className="swiper-pagination"></div>
				<div
					className="swiper-button-next opacity-25 hover:opacity-70 duration-200"
					style={{ color: "#c5c5c5" }}
				></div>
				<div
					className="swiper-button-prev opacity-25 hover:opacity-70 duration-200"
					style={{ color: "#c5c5c5" }}
				></div>
			</Swiper>
		</div>
	);
};

export default Suggestion;
