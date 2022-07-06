import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Jumbotron from "./Jumbotron";

import "swiper/css";
import "swiper/css/navigation";

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
				modules={[Navigation]}
				navigation
				spaceBetween={50}
				speed={500}
			>
				{movieData.map((data) => (
					<SwiperSlide>
						<Jumbotron data={data} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Suggestion;
