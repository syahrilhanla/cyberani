import React, { useState } from "react";
import AnimeInfo from "../anime/AnimeInfo";
import Episodes from "../anime/Episodes";
import VideoComponent from "../anime/VideoComponent";

const AnimeDetails = ({ animeData }) => {
	const lastIndexOfAnime =
		animeData.episodesList &&
		animeData.episodesList[animeData.episodesList.length - 1].episodeNum;
	const [currentEpisode, setCurrentEpisode] = useState(lastIndexOfAnime);
	const [episodeDetail, setEpisodeDetail] = useState(
		animeData.episodesList && animeData.episodesList[0]
	);

	return (
		<div
			className="grid md:grid-cols-[3fr_5fr_2fr] w-full h-fit
     mx-auto px-4 md:px-14 gap-12 justify-between mt-5"
		>
			<AnimeInfo animeData={animeData} />
			<VideoComponent
				title={`${animeData.animeTitle} - Episode ${currentEpisode}`}
				episodeDetail={episodeDetail}
			/>
			<Episodes
				animeData={animeData}
				currentEpisode={currentEpisode}
				setCurrentEpisode={setCurrentEpisode}
			/>
		</div>
	);
};

export default AnimeDetails;
