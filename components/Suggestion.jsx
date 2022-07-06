import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import Jumbotron from "./Jumbotron";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Suggestion = () => {
	const movieData = [
		{
			title: "Star Wars: Obi-Wan Kenobi",
			genre: "Action",
			yearRelease: "2021",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque molestias, iure labore pariatur ipsam, repellendus ducimus, possimus deserunt aliquid quod. Repudiandae minus, dolorem hic quidem voluptates doloribus recusandae sed.",
			imgURL: "obiwan-kenobi.webp",
		},
		{
			title: "Jujutsu Kaisen",
			genre: "Adventure",
			yearRelease: "2020",
			description:
				'Yuji Itadori is just a normal student, but when he had to save a schoolmate, he ate "Sukuna\'s finger" and incarnated a curse in his own soul.',
			imgURL: "jujutsu-kaisen.jpg",
		},
	];

	return (
		<div className="w-full">
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
				{movieData.map((data) => (
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
