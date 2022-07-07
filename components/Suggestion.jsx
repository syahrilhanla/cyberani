import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import fakeData from "./data/fakeData";

import Jumbotron from "./Jumbotron";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Suggestion = () => {
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
				{fakeData.map((data) => (
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
