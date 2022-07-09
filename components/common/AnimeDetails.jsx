import React, { useEffect, useState } from "react";
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

	const getIndexOfEpisodeDetail = (currentEpisode) => {
		const episodeIndex = animeData.episodesList.findIndex(
			(data) => data.episodeNum === currentEpisode
		);
		return episodeIndex;
	};

	useEffect(() => {
		setEpisodeDetail(
			(prevValue) =>
				(prevValue =
					animeData.episodesList[getIndexOfEpisodeDetail(currentEpisode)])
		);
	}, [currentEpisode]);

	return (
		<div
			className="grid md:grid-cols-[3fr_5fr_2fr] w-full
     mx-auto px-4 md:px-14 gap-12 justify-center md:justify-between overflow-hidden"
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
