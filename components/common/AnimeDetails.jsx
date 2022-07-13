import React, { useEffect, useState } from "react";
import AnimeInfo from "../anime/AnimeInfo";
import Episodes from "../anime/Episodes";
import VideoComponent from "../anime/VideoComponent";

const AnimeDetails = ({ animeData }) => {
	const firstEpisode =
		animeData.episodesList &&
		animeData.episodesList[animeData.episodesList.length - 1];

	const [currentEpisode, setCurrentEpisode] = useState(
		firstEpisode ? firstEpisode.episodeNum : "Not Released Yet"
	);
	const [episodeDetail, setEpisodeDetail] = useState(firstEpisode);

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
	}, [currentEpisode, animeData]);

	return (
		<div
			className="grid md:grid-cols-[3fr_5fr_2fr] grid-cols-1 w-full
     mx-auto px-4 md:px-14 gap-12 justify-center md:justify-between"
		>
			<AnimeInfo animeData={animeData} />
			<VideoComponent
				title={`${animeData.animeTitle} - Episode ${currentEpisode}`}
				episodeDetail={episodeDetail}
				synopsis={animeData.synopsis}
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
