import React from "react";
import AnimeInfo from "../anime/AnimeInfo";
import Episodes from "../anime/Episodes";
import VideoComponent from "../anime/VideoComponent";

const AnimeDetails = ({ animeData }) => {
	return (
		<div
			className="grid md:grid-cols-[3fr_5fr_2fr] w-full h-fit
     mx-auto px-4 md:px-14 gap-12 justify-between mt-5"
		>
			<AnimeInfo animeData={animeData} />
			<VideoComponent />
			<Episodes animeData={animeData} />
		</div>
	);
};

export default AnimeDetails;
