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
			title: "Star Wars: Obi-Wan Kenobi",
			genre: "Action",
			yearRelease: "2021",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque molestias, iure labore pariatur ipsam, repellendus ducimus, possimus deserunt aliquid quod. Repudiandae minus, dolorem hic quidem voluptates doloribus recusandae sed.",
			imgURL: "obiwan-kenobi.webp",
		},
	];

	return (
		<div className="w-[100%]">
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Autoplay]}
				navigation
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				pagination={{ el: ".swiper-pagination", clickable: true }}
				spaceBetween={50}
				speed={500}
			>
				{movieData.map((data) => (
					<SwiperSlide>
						<Jumbotron data={data} />
					</SwiperSlide>
				))}
				<div class="swiper-pagination"></div>
			</Swiper>
		</div>
	);
};

export default Suggestion;
